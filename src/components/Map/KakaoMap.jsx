import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk'
import sprout from '@/assets/icons/dark-green-sprout.svg'
import favSprout from '@/assets/icons/light-green-sprout.svg'
import sproutOff from '@/assets/icons/gray-sprout.svg'
import myLoc from '@/assets/icons/current-loc.svg'
import { useState } from 'react'
import { useEffect } from 'react'
import * as S from './Map.Styled.js'

function KakaoMap({ center, isMarker, filter, onSelectCafe, onCreateMap, searchKeyword }) {
  const baseURL = import.meta.env.VITE_API_BASE_URL
  const [cafes, setCafes] = useState([])
  const [selectedCafe, setSelectedCafe] = useState(null)

  const nearbyCafes = async (lat, lng) => {
    const at = localStorage.getItem('accessToken')
    if (!at || at === 'undefined') {
      console.log('로컬스토리지에 accessToken 없음')
      return
    }
    const res = await fetch(`${baseURL}api/cafes/nearby?lat=${lat}&lng=${lng}`, {
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
    const res = await fetch(`${baseURL}api/cafes/filtered/popular`, {
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
    const res = await fetch(`${baseURL}api/cafes/filtered/coupon`, {
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
    const res = await fetch(`${baseURL}api/cafes/filtered/ai`, {
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
    const res = await fetch(`${baseURL}api/cafes?keyword=${keyword}`, {
      headers: { Authorization: `Bearer ${at}` },
    })
    const json = await res.json().catch(() => ({}))
    if (!res.ok || !Array.isArray(json?.data)) {
      console.log('search error', res.status, json)
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
  }, [searchKeyword])

  useEffect(() => {
    if (localStorage.getItem('accessToken') === 'undefined') {
      localStorage.removeItem('accessToken')
    }
    if (searchKeyword) return
    setSelectedCafe(null)
    onSelectCafe?.(null)
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

  return (
    <S.MapWrapper>
      <Map
        center={center}
        level={3}
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
            <CustomOverlayMap
              key={c.id}
              position={{ lat: c.lat, lng: c.lng }}
              yAnchor={0.8}
              xAnchor={0.5}
            >
              <div
                onClick={() => {
                  setSelectedCafe(c.id)
                  console.log('clicked cafe id:', c.id)
                  onSelectCafe && onSelectCafe(c.id)
                }}
                style={{
                  textAlign: 'center',
                  transition: 'transform 120ms ease',
                  position: 'relative',
                }}
              >
                <img
                  src={imgSrc}
                  alt='sprout'
                  style={{
                    width: isSelected ? 64 : 40,
                    height: isSelected ? 64 : 50,
                  }}
                />
              </div>
            </CustomOverlayMap>
          )
        })}
      </Map>
    </S.MapWrapper>
  )
}

export default KakaoMap
