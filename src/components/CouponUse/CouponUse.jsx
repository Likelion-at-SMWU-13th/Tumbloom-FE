import React, { useState } from 'react'
import * as S from './styled'
import stamp from '@/assets/images/stamp_img.svg'

const CouponUse = ({ onUseClick, active, cafeName, expiredDate, price }) => {
  return (
    <S.Wrapper>
      <S.CafeImage
        src='https://i.pinimg.com/736x/38/48/e2/3848e28098dd9fe20f4430b1eb2d3c5e.jpg'
        style={{ filter: active ? 'none' : 'grayscale(100%)' }}
      />
      <S.TextContainer>
        <S.CafeName>{cafeName}</S.CafeName>
        <S.DiscountPrice>{price}</S.DiscountPrice>
      </S.TextContainer>
      <S.ExpiryDateContainer>
        <S.ExpiryDate style={{ fontSize: '0.9375rem' }}>유효기간</S.ExpiryDate>
        <S.ExpiryDate>{expiredDate}</S.ExpiryDate>
      </S.ExpiryDateContainer>
      <S.Button
        onClick={active ? onUseClick : undefined}
        style={{
          border: active ? 'none' : '1px solid #25AF94',
          backgroundColor: active ? '#25AF94' : 'transparent',
          color: active ? '#fff' : '#25AF94',
          cursor: active ? 'pointer' : 'default',
        }}
      >
        {active ? '사용하기' : '사용완료'}
      </S.Button>
      <S.StampBg src={stamp} />
    </S.Wrapper>
  )
}

export default CouponUse
