import React from 'react'
import * as S from './styled'
import dotLine from '@/assets/images/dot-line.svg'
import change from '@/assets/icons/change.svg'
import stamp from '@/assets/images/stamp_img.svg'

const CafeCoupon = ({ cafeName, price, count }) => {
  return (
    <S.CouponWrapper>
      <S.CouponLeftWrapper>
        <S.CouponEdge></S.CouponEdge>
        <S.CouponLeftContent>
          <S.CafeName>{cafeName}</S.CafeName>
          <S.CafeDiscount>{price}원</S.CafeDiscount>
          <S.CafeCouponCount>
            잔여수량 <span style={{ fontWeight: '600' }}>{count}개</span>
          </S.CafeCouponCount>
        </S.CouponLeftContent>
        <S.StampBg src={stamp} />
        <S.DotLine src={dotLine} />
      </S.CouponLeftWrapper>
      <S.CouponRightWrapper>
        <S.CouponRightContent>
          <S.ChangeIcon src={change} />
          <S.ChangeText>교환하기</S.ChangeText>
        </S.CouponRightContent>
      </S.CouponRightWrapper>
    </S.CouponWrapper>
  )
}

export default CafeCoupon
