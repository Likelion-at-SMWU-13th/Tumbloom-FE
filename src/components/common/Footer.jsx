import React from 'react'
import styled from 'styled-components'
import NavItem from './NavItem'

const FooterBox = styled.div``

const FooterRow = styled.ul``

function Footer(props) {
  return (
    <FooterBox>
      <FooterRow>
        <NavItem to='/' label='홈' />
        <NavItem to='/map' label='지도' />
        <li />
        <NavItem to='/coupon' label='쿠폰' />
        <NavItem to='/mypage' label='내 정보' />
      </FooterRow>
    </FooterBox>
  )
}

export default Footer
