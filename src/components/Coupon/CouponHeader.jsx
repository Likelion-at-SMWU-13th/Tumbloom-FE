import React from 'react'
import * as S from './styled'

const CouponHeader = () => {
  return (
    <S.HeaderContainer>
      <S.CouponChangeTap>
        <S.TapText>교환하기</S.TapText>
      </S.CouponChangeTap>
      <S.MyCouponTap>
        <S.TapText>내 쿠폰</S.TapText>
      </S.MyCouponTap>
    </S.HeaderContainer>
  )
}

export default CouponHeader
