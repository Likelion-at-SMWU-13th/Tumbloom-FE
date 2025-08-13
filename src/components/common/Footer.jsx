import React from 'react'
import styled from 'styled-components'
import NavItem from './NavItem'

const FooterBox = styled.div``

const FooterRow = styled.ul``

function Footer(props) {
  return (
    <FooterBox>
      <FooterRow>
        <NavItem label='홈' />
        <NavItem label='지도' />
        <li />
        <NavItem label='쿠폰' />
        <NavItem label='내 정보' />
      </FooterRow>
    </FooterBox>
  )
}

export default Footer
