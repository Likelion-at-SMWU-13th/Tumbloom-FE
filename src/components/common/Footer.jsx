import React from 'react'
import styled from 'styled-components'
import NavItem from './NavItem'

const FooterBox = styled.div``

const FooterRow = styled.ul``

function Footer(props) {
  return (
    <FooterBox>
      <FooterRow>
        <NavItem />
        <NavItem />
        <li />
        <NavItem />
        <NavItem />
      </FooterRow>
    </FooterBox>
  )
}

export default Footer
