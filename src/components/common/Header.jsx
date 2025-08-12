import React from 'react'
import styled from 'styled-components'
import backBtn from '../../assets/icons/back-btn.svg'

const HeaderBox = styled.div`
  display: grid;
  grid-template-columns: 3.5rem 1fr 3.5rem;
  width: 24.5625rem;
  height: 6.75rem;
  flex-shrink: 0;
  border-bottom: 1px solid black;
`

const LeftArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 4.38rem;
  padding-left: 1.65rem;
`

const BackBtn = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  cursor: pointer;
`

const TitleArea = styled.div`
  margin: 0;
  align-items: center;
  justify-content: center;
  padding-top: 4.38rem;
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
  align-items: flex-start;
  justify-content: center;
  padding-top: 4.38rem;
`

function Header({ title }) {
  return (
    <HeaderBox>
      <LeftArea>
        <BackBtn src={backBtn}></BackBtn>
      </LeftArea>
      <TitleArea>{title}</TitleArea>
      <RightArea></RightArea>
    </HeaderBox>
  )
}

export default Header
