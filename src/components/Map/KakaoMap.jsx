import React from 'react'
import styled from 'styled-components'
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk'
import sprout from '@/assets/icons/dark-green-sprout.svg'
import favSprout from '@/assets/icons/light-green-sprout.svg'
import sproutOff from '@/assets/icons/gray-sprout.svg'
import myLoc from '@/assets/icons/current-loc.svg'
import { useState } from 'react'
import { useEffect } from 'react'

const MapWrapper = styled.div`
  width: 100%;
  height: 100dvh;
  position: absolute;
  inset: 0;
  z-index: 0;
`

function KakaoMap({ center, isMarker, filter, onSelectCafe, onCreateMap, searchKeyword }) {
  const [cafes, setCafes] = useState([])
  const [selectedCafe, setSelectedCafe] = useState(null)

  const nearbyCafes = async (lat, lng) => {
    const at = localStorage.getItem('accessToken')
    if (!at || at === 'undefined') {
      console.log('로컬스토리지에 accessToken 없음')
      return
    }
    const res = await fetch(`https://tumbloom.store/api/cafes/nearby?lat=${lat}&lng=${lng}`, {
      headers: { Authorization: `Bearer ${at}` },
    })
    const json = await res.json().catch(() => ({}))
    if (!res.ok || !Array.isArray(json?.data)) {
      console.log('nearby error', res.status, json)
      setCafes([])
      return
    }

    setCafes(
      json.data.map((c) => ({
        id: c.id,
        name: c.cafeName,
        lat: c.latitude,
        lng: c.longitude,
        fav: c.favorite,
      })),
    )
  }

  const popularCafes = async () => {
    const at = localStorage.getItem('accessToken')
    if (!at || at === 'undefined') {
      console.log('로컬스토리지에 accessToken 없음')
      return
    }
    const res = await fetch(`https://tumbloom.store/api/cafes/filtered/popular`, {
      headers: { Authorization: `Bearer ${at}` },
    })
    const json = await res.json().catch(() => ({}))
    if (!res.ok || !Array.isArray(json?.data)) {
      console.log('popular error', res.status, json)
      setCafes([])
      return
    }
    setCafes(
      json.data.map((c) => ({
        id: c.id,
        name: c.cafeName,
        lat: c.latitude,
        lng: c.longitude,
        fav: c.favorite,
      })),
    )
  }

  const myCouponCafes = async () => {
    const at = localStorage.getItem('accessToken')
    if (!at || at === 'undefined') {
      console.log('로컬스토리지에 accessToken 없음')
      return
    }
    const res = await fetch(`https://tumbloom.store/api/cafes/filtered/coupon`, {
      headers: { Authorization: `Bearer ${at}` },
    })
    const json = await res.json().catch(() => ({}))
    if (!res.ok || !Array.isArray(json?.data)) {
      console.log('coupon error', res.status, json)
      setCafes([])
      return
    }
    setCafes(
      json.data.map((c) => ({
        id: c.id,
        name: c.cafeName,
        lat: c.latitude,
        lng: c.longitude,
        fav: c.favorite,
      })),
    )
  }

  const aiRecCafes = async () => {
    const at = localStorage.getItem('accessToken')
    if (!at || at === 'undefined') {
      console.log('로컬스토리지에 accessToken 없음')
      return
    }
    const res = await fetch(`https://tumbloom.store/api/cafes/filtered/ai`, {
      headers: { Authorization: `Bearer ${at}` },
    })
    const json = await res.json().catch(() => ({}))
    if (!res.ok || !Array.isArray(json?.data)) {
      console.log('popular error', res.status, json)
      setCafes([])
      return
    }

    setCafes(
      json.data.map((c) => ({
        id: c.id,
        name: c.cafeName,
        lat: c.latitude,
        lng: c.longitude,
        fav: c.favorite,
      })),
    )
  }

  const searchCafes = async (keyword) => {
    const at = localStorage.getItem('accessToken')
    if (!at || at === 'undefined') {
      console.log('로컬스토리지에 accessToken 없음')
      return
    }
    const res = await fetch(`https://tumbloom.store/api/cafes?keyword=${keyword}`, {
      headers: { Authorization: `Bearer ${at}` },
    })
    const json = await res.json().catch(() => ({}))
    if (!res.ok || !Array.isArray(json?.data)) {
      console.log('popular error', res.status, json)
      setCafes([])
      return
    }
    setCafes(
      json.data.map((c) => ({
        id: c.id,
        name: c.cafeName,
        lat: c.latitude,
        lng: c.longitude,
        fav: c.favorite,
      })),
    )
  }

  useEffect(() => {
    if (searchKeyword && searchKeyword.trim()) {
      searchCafes(searchKeyword)
    }
    onSelectCafe && onSelectCafe(null)

    if (localStorage.getItem('accessToken') === 'undefined') {
      localStorage.removeItem('accessToken')
    }
    ;(async () => {
      switch (filter) {
        case 'hot':
          await popularCafes()
          break
        case 'coupon':
          await myCouponCafes()
          break
        case 'ai':
          await aiRecCafes()
          break
        default:
          if (center?.lat && center?.lng) {
            await nearbyCafes(center.lat, center.lng)
          }
      }
    })()
  }, [searchKeyword, filter, center?.lat, center?.lng])

  useEffect(() => {
    console.log('selectedCafe changed:', selectedCafe)
  }, [selectedCafe])

  return (
    <MapWrapper>
      <Map
        center={center}
        level={2}
        style={{ width: '100%', height: '100%' }}
        onCreate={(map) => onCreateMap && onCreateMap(map)}
        onClick={() => {
          setSelectedCafe(null)
          onSelectCafe && onSelectCafe(null)
        }}
      >
        {isMarker && (
          <MapMarker
            image={{
              src: myLoc,
              size: { width: 150, height: 150 },
            }}
            position={center}
          ></MapMarker>
        )}
        {cafes.map((c) => {
          const isSelected = Number(selectedCafe) === Number(c.id)
          const isAnySelected = selectedCafe !== null

          const imgSrc = isAnySelected
            ? isSelected
              ? c.fav
                ? favSprout
                : sprout
              : sproutOff
            : c.fav
              ? favSprout
              : sprout

          const fontColor = isAnySelected ? (isSelected ? '#000000' : '#5F5F5F') : '#000000'

          return (
            <CustomOverlayMap key={c.id} position={{ lat: c.lat, lng: c.lng }} yAnchor={1}>
              <div
                onClick={() => {
                  setSelectedCafe(c.id)
                  console.log('clicked cafe id:', c.id)
                  onSelectCafe && onSelectCafe(c.id)
                }}
                style={{
                  transform: 'translate(-50%,-100%)',
                  textAlign: 'center',
                  transition: 'transform 120ms ease',
                }}
              >
                <img
                  src={imgSrc}
                  alt='sprout'
                  style={{ width: isSelected ? 64 : 40, height: isSelected ? 64 : 50 }}
                />
                <div
                  style={{
                    padding: '2px 6px',
                    fontSize: isSelected ? 13 : 11,
                    fontFamily: 'Cafe24Decoshadow',
                    color: fontColor,
                  }}
                >
                  {c.name}
                </div>
              </div>
            </CustomOverlayMap>
          )
        })}
      </Map>
    </MapWrapper>
  )
}

export default KakaoMap
