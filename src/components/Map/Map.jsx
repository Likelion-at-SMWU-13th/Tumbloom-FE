import React from 'react'
import SearchBox from '@/components/Coupon/CafeInputField'
import MapBtn from './MapBtn'
import sparkleIcon from '@/assets/icons/sparkle.svg'
import myCouponIcon from '@/assets/icons/my-coupon.svg'
import hotIcon from '@/assets/icons/hot-place.svg'
import mapIcon from '@/assets/icons/my-loc.svg'
import listIcon from '@/assets/icons/list.svg'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const HeaderBtns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.8rem;
  border: 1px solid black;
  padding-top: 0.88rem;
`

const FooterBtns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid black;
  bottom: 0;
`

const MyLocBtn = styled.button`
  width: 2.625rem;
  height: 2.625rem;
  flex-shrink: 0;
  box-shadow: 0 2.1px 5.25px rgba(0, 0, 0, 0.15);
  background-color: transparent;
  border-radius: 10rem;
  border: none;
`

function Map() {
  return (
    <Wrapper>
      <SearchBox />
      <HeaderBtns>
        <MapBtn img={sparkleIcon} name='AI 내취향 추천' />
        <MapBtn img={myCouponIcon} name='쿠폰 보유' />
        <MapBtn img={hotIcon} name='인기' />
      </HeaderBtns>
      <FooterBtns>
        <MyLocBtn>
          <img src={mapIcon} />
        </MyLocBtn>
        <MapBtn img={listIcon} name='목록보기' />
      </FooterBtns>
    </Wrapper>
  )
}

export default Map
