import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import NavItem from './NavItem'
import homeIcon from '@/assets/icons/footer-home.svg'
import homeClickedIcon from '@/assets/icons/footer-clicked-home.svg'
import mapIcon from '@/assets/icons/footer-map.svg'
import mapClickedIcon from '@/assets/icons/footer-clicked-map.svg'
import couponIcon from '@/assets/icons/footer-coupon.svg'
import couponClickedIcon from '@/assets/icons/footer-clicked-coupon.svg'
import mypageIcon from '@/assets/icons/footer-mypage.svg'
import mypageClickedIcon from '@/assets/icons/footer-clicked-mypage.svg'
import scanIcon from '@/assets/icons/footer-scan.svg'
import scanBg from '@/assets/icons/footer-scan-bg.svg'

const FooterBox = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  overflow: visible;
  justify-content: center;
  width: 24.5625rem;
  height: 5.6875rem;
  flex-shrink: 0;
  border: 1px solid #d9d9d9;
`

const FooterRow = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
`

const ScanItem = styled.li``

function Footer() {
  const [currentPath, setCurrentPath] = useState('home')

  return (
    <FooterBox>
      <FooterRow>
        <NavItem
          label='홈'
          icon={homeIcon}
          clickedIcon={homeClickedIcon}
          active={currentPath === 'home'}
          onClick={() => setCurrentPath('home')}
        />
        <NavItem
          label='지도'
          icon={mapIcon}
          clickedIcon={mapClickedIcon}
          active={currentPath === 'map'}
          onClick={() => setCurrentPath('map')}
        />
        <ScanItem />
        <NavItem
          label='쿠폰'
          icon={couponIcon}
          clickedIcon={couponClickedIcon}
          active={currentPath === 'coupon'}
          onClick={() => setCurrentPath('coupon')}
        />
        <NavItem
          label='내 정보'
          icon={mypageIcon}
          clickedIcon={mypageClickedIcon}
          active={currentPath === 'mypage'}
          onClick={() => setCurrentPath('mypage')}
        />
      </FooterRow>
    </FooterBox>
  )
}

export default Footer
