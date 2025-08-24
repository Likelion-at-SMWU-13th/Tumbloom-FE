import React from 'react'
import { useEffect } from 'react'
import stampImg from '@/assets/images/get-stamp.svg'
import backgroundImg from '@/assets/images/stamp-effect-bg.png'
import { useNavigate } from 'react-router-dom'
import * as S from '@/components/getStamp/GetStamp.Styled'

function GetStamp() {
  const navigate = useNavigate()

  const goToHome = () => {
    navigate(`/home`)
  }

  const goToCoupon = () => {
    navigate(`/coupon`)
  }

  return (
    <S.Wrapper>
      <S.BgImg src={backgroundImg} />
      <S.ContentBox>
        <S.ImgContainer>
          <S.Img src={stampImg} />
        </S.ImgContainer>
        <S.Text>스탬프 적립 완료!</S.Text>
        <S.BtnContainer>
          <S.GoHomeBtn onClick={goToHome}>홈화면</S.GoHomeBtn>
          <S.GoCouponBtn onClick={goToCoupon}>쿠폰</S.GoCouponBtn>
        </S.BtnContainer>
      </S.ContentBox>
    </S.Wrapper>
  )
}

export default GetStamp
