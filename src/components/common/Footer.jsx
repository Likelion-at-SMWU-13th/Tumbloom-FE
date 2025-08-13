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

function Footer() {
  const [currentPath, setCurrentPath] = useState('home')

  return (
    <S.FooterBox>
      <S.FooterRow>
        <S.LeftMenu>
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
        </S.LeftMenu>
        <S.RightMenu>
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
        </S.RightMenu>

        <S.ScanItem>
          <S.ScanBtn src={scanIcon} />
        </S.ScanItem>
      </S.FooterRow>
    </S.FooterBox>
  )
}

export default Footer
