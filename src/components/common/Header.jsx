import React from 'react'
import styled from 'styled-components'

function Header({ title }) {
  return (
    <HeaderBox>
      <LeftArea>
        <BackBtn src='./assets/icons/back-btn.svg'></BackBtn>
      </LeftArea>
      <TitleArea>{title}</TitleArea>
      <RightArea></RightArea>
    </HeaderBox>
  )
}

export default Header
