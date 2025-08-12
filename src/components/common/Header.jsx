import React from 'react'
import styled from 'styled-components'

const HeaderBox = styled.div`
  display: flex
  width: 24.5625rem;
  height: 6.75rem;
  flex-shrink: 0;
`

const LeftArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const BackBtn = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  cursor: pointer;
`

const TitleArea = styled.p`
display: flex
color: #000;
text-align: center;
font-family: "Pretendard Variable";
font-size: 1.25rem;
font-style: normal;
font-weight: 500;
line-height: normal;`

const RightArea = styled.div`
  display: flex;
`

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
