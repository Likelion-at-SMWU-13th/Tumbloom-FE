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
import scanIcon from '@/assets/icons/footer-scan-btn.svg'

const FooterBox = styled.div`
  display: flex;
  bottom: 6.3rem;
  position: fixed;
  justify-content: center;
  align-items: center;
  width: 24.5625rem;
  height: 5.6875rem;
  flex-shrink: 0;
  border: 1px solid #d9d9d9;
`

const FooterRow = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  list-style: none;
  position: relative;
  padding: 0 calc(6.30206rem / 2 + 0.5rem);
`

const LeftMenu = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  margin-right: 7rem;
`

const RightMenu = styled.div`
  display: flex;
  gap: 0.5rem;
  flex: 1;
  justify-content: flex-end;
`

const ScanItem = styled.li`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 1.87rem;
`

const ScanBtn = styled.img`
  width: 6.30206rem;
  height: 5.977rem;
  flex-shrink: 0;
  cursor: pointer;
`

function Footer() {
  const [currentPath, setCurrentPath] = useState('home')

  return (
    <FooterBox>
      <FooterRow>
        <LeftMenu>
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
        </LeftMenu>
        <RightMenu>
          <NavItem
            label='쿠폰'
            icon={couponIcon}
            clickedIcon={couponClickedIcon}
            active={currentPath === 'coupon'}
            onClick={() => setCurrentPath('coupon')}
          />
          <NavItem
            label='내정보'
            icon={mypageIcon}
            clickedIcon={mypageClickedIcon}
            active={currentPath === 'mypage'}
            onClick={() => setCurrentPath('mypage')}
          />
        </RightMenu>

        <ScanItem>
          <ScanBtn src={scanIcon} />
        </ScanItem>
      </FooterRow>
    </FooterBox>
  )
}

export default Footer
