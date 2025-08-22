import React from 'react'
import { useState } from 'react'
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
import * as S from './Footer.Styled.js'
import { useNavigate, useLocation } from 'react-router-dom'

function Footer() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const currentPath = {
    home: `/home`,
    map: `/map`,
    scan: `/qr`,
    coupon: `/coupon`,
    mypage: `/mypage`,
  }

  return (
    <S.FooterBox>
      <S.FooterRow>
        <S.LeftMenu>
          <NavItem
            label='홈'
            icon={homeIcon}
            clickedIcon={homeClickedIcon}
            active={pathname === currentPath.home}
            onClick={() => navigate(currentPath.home)}
          />
          <NavItem
            label='지도'
            icon={mapIcon}
            clickedIcon={mapClickedIcon}
            active={pathname === currentPath.map}
            onClick={() => navigate(currentPath.map)}
          />
        </S.LeftMenu>
        <S.RightMenu>
          <NavItem
            label='쿠폰'
            icon={couponIcon}
            clickedIcon={couponClickedIcon}
            active={pathname === currentPath.coupon}
            onClick={() => navigate(currentPath.coupon)}
          />
          <NavItem
            label='내정보'
            icon={mypageIcon}
            clickedIcon={mypageClickedIcon}
            active={pathname === currentPath.mypage}
            onClick={() => navigate(currentPath.mypage)}
          />
        </S.RightMenu>

        <S.ScanItem>
          <S.ScanBtn src={scanIcon} onClick={() => navigate(currentPath.scan)} />
        </S.ScanItem>
      </S.FooterRow>
    </S.FooterBox>
  )
}

export default Footer
