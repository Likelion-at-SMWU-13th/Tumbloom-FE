import React from 'react'
import SearchBox from '@/components/Map/SearchBox'
import MapBtn from './MapBtn'
import Footer from '../common/Footer'
import sparkOff from '@/assets/icons/sparkleOff.svg'
import sparkOn from '@/assets/icons/sparkleOn.svg'
import couponOn from '@/assets/icons/couponOn.svg'
import couponOff from '@/assets/icons/couponOff.svg'
import hotOff from '@/assets/icons/hotOff.svg'
import hotOn from '@/assets/icons/hotOn.svg'
import mapIcon from '@/assets/icons/my-loc.svg'
import listIcon from '@/assets/icons/list.svg'
import styled from 'styled-components'
import Sprout from '@/components/Map/CafeSprout'
import KakaoMap from './KakaoMap'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const MapContainer = styled.div`
  position: relative;
`

const Wrapper = styled.div`
  display: flex;
  inset: 0;
  flex-direction: column;
  padding-top: 3rem;
  position: absolute;
  z-index: 1;
`

const HeaderBtns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.6rem;
  padding-top: 0.88rem;
`

const FooterBtns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 13rem;
  transform: translateY(40rem);
  margin-top: auto;
  padding-bottom: 1rem;
`

const MyLocBtn = styled.button`
  width: 2.625rem;
  height: 2.625rem;
  flex-shrink: 0;
  box-shadow: 0 2.1px 5.25px rgba(0, 0, 0, 0.15);
  background-color: transparent;
  border-radius: 10rem;
  border: none;
  background-color: #fff;
  cursor: pointer;
`

const ListBtn = styled.button`
  display: inline-flex;
  height: 2.375rem;
  padding: 0 0.9375rem;
  align-items: center;
  gap: 0.4375rem;
  flex-shrink: 0;
  border-radius: 18.75rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.15);
  border: none;
  cursor: pointer;
  background-color: transparent;
  background-color: #fff;
`

const ListBtnIcon = styled.img`
  aspect-ratio: 1/1;
`

const ListBtnName = styled.span`
  color: #000;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

function Map() {
  const navigate = useNavigate()
  const [active, setActive] = useState('')
  const select = (key) => setActive(key)
  const [center, setCenter] = useState({ lat: 33.450701, lng: 126.570667 })
  const [isMarker, setIsMarker] = useState(false)

  useEffect(() => {
    console.log('origin:', window.location.origin)
    console.log('kakao loaded?:', !!window.kakao?.maps)
  }, [])

  const showMyLoc = () => {
    navigator.geolocation.watchPosition((pos) => {
      const lat = pos.coords.latitude
      const lng = pos.coords.longitude
      setCenter({ lat, lng })
      setIsMarker(true)
    })
  }

  const goCafeList = () => {
    navigate('/cafelist', { state: { lat: center.lat, lng: center.lng } })
  }

  return (
    <MapContainer>
      <KakaoMap center={center} isMarker={isMarker} filter={active} />
      <Wrapper>
        <SearchBox />
        <HeaderBtns>
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
        </HeaderBtns>
        <FooterBtns>
          <MyLocBtn onClick={showMyLoc}>
            <img src={mapIcon} />
          </MyLocBtn>
          <ListBtn onClick={goCafeList}>
            <ListBtnIcon src={listIcon} />
            <ListBtnName>목록보기</ListBtnName>
          </ListBtn>
        </FooterBtns>
        <Footer />
      </Wrapper>
    </MapContainer>
  )
}

export default Map
