import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk'
import sprout from '@/assets/icons/dark-green-sprout.svg'
import favSprout from '@/assets/icons/light-green-sprout.svg'
import sproutOff from '@/assets/icons/gray-sprout.svg'
import myLoc from '@/assets/icons/current-loc.svg'
import { useState } from 'react'
import { useEffect } from 'react'
import * as S from './Map.Styled.js'
import api from '@/apis/api.js'

function KakaoMap({ center, isMarker, filter, onSelectCafe, onCreateMap, searchKeyword }) {
  const [cafes, setCafes] = useState([])
  const [selectedCafe, setSelectedCafe] = useState(null)

  const setCafeData = (data) => {
    if (!Array.isArray(data)) {
      setCafes([])
      return
    }
    setCafes(
      data.map((c) => ({
        id: c.id,
        name: c.cafeName,
        lat: c.latitude,
        lng: c.longitude,
        fav: c.favorite,
      })),
    )
  }

  const nearbyCafes = async (lat, lng) => {
    try {
      const res = await api.get(`/api/cafes/nearby`, { params: { lat, lng } })
      setCafeData(res.data.data)
    } catch (err) {
      console.log('카페 데이터 불러오기 실패', err)
      setCafes([])
    }
  }

  const popularCafes = async () => {
    try {
      const res = await api.get(`/api/cafes/filtered/popular`)
      setCafeData(res.data.data)
    } catch (err) {
      console.log('카페 데이터 불러오기 실패', err)
      setCafes([])
    }
  }

  const myCouponCafes = async () => {
    try {
      const res = await api.get(`/api/cafes/filtered/coupon`)
      setCafeData(res.data.data)
    } catch (err) {
      console.log('카페 데이터 불러오기 실패', err)
      setCafes([])
    }
  }

  const aiRecCafes = async () => {
    try {
      const res = await api.get(`/api/cafes/filtered/ai`)
      setCafeData(res.data.data)
    } catch (err) {
      console.log('카페 데이터 불러오기 실패', err)
      setCafes([])
    }
  }

  const searchCafes = async (keyword) => {
    try {
      const res = await api.get(`/api/cafes?keyword=${keyword}`)
      setCafeData(res.data.data)
    } catch (err) {
      console.log('카페 데이터 불러오기 실패', err)
      setCafes([])
    }
  }

  useEffect(() => {
    if (searchKeyword && searchKeyword.trim()) {
      searchCafes(searchKeyword)
    }
  }, [searchKeyword])

  useEffect(() => {
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
