import React, { useCallback } from 'react'
import SearchBox from '@/components/Map/SearchBox'
import MapBtn from '../components/Map/MapBtn'
import Footer from '../components/common/Footer'
import sparkOff from '@/assets/icons/sparkleOff.svg'
import sparkOn from '@/assets/icons/sparkleOn.svg'
import couponOn from '@/assets/icons/couponOn.svg'
import couponOff from '@/assets/icons/couponOff.svg'
import hotOff from '@/assets/icons/hotOff.svg'
import hotOn from '@/assets/icons/hotOn.svg'
import mapIcon from '@/assets/icons/my-loc.svg'
import listIcon from '@/assets/icons/list.svg'
import KakaoMap from '../components/Map/KakaoMap'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import MapCafeCard from '@/components/Map/MapCafeCard'
import * as S from '@/components/Map/Map.Styled'

function Map() {
  const navigate = useNavigate()
  const [active, setActive] = useState('')
  const [map, setMap] = useState(null)
  const [center, setCenter] = useState({ lat: 37.5665, lng: 126.978 })
  const [isMarker, setIsMarker] = useState(false)
  const [selectedCafeId, setSelectedCafeId] = useState(null)
  const [state, setState] = useState(null)
  const [keyword, setKeyword] = useState('')

  const select = (key) => {
    setActive(key)
    setKeyword('')
    setSelectedCafeId(null)
  }

  const handleSearch = (q) => {
    setKeyword(q)
    setActive('')
    setSelectedCafeId(null)
  }

  const handleMapBtns = () => {
    setActive('')
  }

  useEffect(() => {
    console.log('origin:', window.location.origin)
    console.log('kakao loaded?:', !!window.kakao?.maps)
  }, [])

  const showMyLoc = useCallback(() => {
    if (!map) return
    navigator.geolocation.getCurrentPosition((pos) => {
      const lat = pos.coords.latitude
      const lng = pos.coords.longitude
      setCenter({ lat, lng })
      localStorage.removeItem('lat')
      localStorage.removeItem('lng')
      localStorage.setItem('lat', lat.toFixed(6))
      localStorage.setItem('lng', lng.toFixed(6))
      setIsMarker(true)
      map.panTo(new window.kakao.maps.LatLng(lat, lng))
    })
  }, [map])

  useEffect(() => {
    showMyLoc()
  }, [showMyLoc])

  const goCafeList = () => {
    navigate('/cafelist', { state: { lat: center.lat, lng: center.lng } })
  }

  return (
    <>
      <S.MapContainer>
        <KakaoMap
          center={center}
          isMarker={isMarker}
          filter={active}
          onSelectCafe={setSelectedCafeId}
          onCreateMap={setMap}
          searchKeyword={keyword}
        />
        <S.Wrapper>
          <SearchBox onSearch={handleSearch} onClick={handleMapBtns} txt={keyword} />
          <S.HeaderBtns>
            <MapBtn
              img={active === 'ai' ? sparkOn : sparkOff}
              name='AI 내취향 추천'
              onClick={() => select('ai')}
              isActive={active === 'ai'}
            />
            <MapBtn
              img={active === 'coupon' ? couponOn : couponOff}
              name='쿠폰 보유'
              onClick={() => select('coupon')}
              isActive={active === 'coupon'}
            />
            <MapBtn
              img={active === 'hot' ? hotOn : hotOff}
              name='인기'
              onClick={() => select('hot')}
              isActive={active === 'hot'}
            />
          </S.HeaderBtns>
          <S.FooterBtns style={{ bottom: selectedCafeId ? '18.125rem' : '6rem' }}>
            <S.MyLocBtn onClick={showMyLoc}>
              <img src={mapIcon} />
            </S.MyLocBtn>
            <S.ListBtn onClick={goCafeList}>
              <S.ListBtnIcon src={listIcon} />
              <S.ListBtnName>목록보기</S.ListBtnName>
            </S.ListBtn>
          </S.FooterBtns>
          {selectedCafeId && <MapCafeCard cafeId={selectedCafeId} />}
        </S.Wrapper>
      </S.MapContainer>
      <Footer />
    </>
  )
}

export default Map
