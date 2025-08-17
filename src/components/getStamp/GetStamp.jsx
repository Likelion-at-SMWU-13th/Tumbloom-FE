import React from 'react'
import styled from 'styled-components'
import stampImg from '@/assets/images/get-stamp.svg'
import backgroundImg from '@/assets/images/stamp-effect-bg.png'
import { useNavigate } from 'react-router-dom'

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  position: fixed;
`

const BgImg = styled.img`
  opacity: 0.96;
  inset: 0;
`

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15.97rem;
  align-items: center;
  position: absolute;
`

const ImgContainer = styled.div`
  display: flex;
  position: relative;
`

const Img = styled.img``

const Text = styled.span`
  top: 10.81rem;
  position: absolute;
  color: #fff;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-top: 16.01rem;
`
const BtnContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  padding-top: 2.6rem;
  padding-bottom: 20rem;
`

const GoHomeBtn = styled.button`
  background: transparent;
  display: flex;
  width: 7.23213rem;
  height: 2.5rem;
  padding: 0.89288rem 0;
  justify-content: center;
  align-items: center;
  gap: 0.89288rem;
  flex-shrink: 0;
  border-radius: 2.67856rem;
  border: 1.429px solid #fff;
  color: #fff;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 1.07144rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`
const GoCouponBtn = styled.button`
  background: transparent;
  display: flex;
  width: 7.23213rem;
  height: 2.5rem;
  padding: 0.89288rem 0;
  justify-content: center;
  align-items: center;
  gap: 0.89288rem;
  flex-shrink: 0;
  border-radius: 2.67856rem;
  border: 1.429px solid #fff;
  color: #fff;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 1.07144rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`

function GetStamp() {
  const navigate = useNavigate()

  const goToHome = () => {
    navigate(`/`)
  }

  const goToCoupon = () => {
    navigate(`/`)
  }

  return (
    <Wrapper>
      <BgImg src={backgroundImg} />
      <ContentBox>
        <ImgContainer>
          <Img src={stampImg} />
        </ImgContainer>
        <Text>스탬프 적립 완료!</Text>
        <BtnContainer>
          <GoHomeBtn onClick={goToHome}>홈화면</GoHomeBtn>
          <GoCouponBtn onClick={goToCoupon}>쿠폰</GoCouponBtn>
        </BtnContainer>
      </ContentBox>
    </Wrapper>
  )
}

export default GetStamp
