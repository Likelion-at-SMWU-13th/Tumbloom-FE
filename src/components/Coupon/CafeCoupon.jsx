import React from 'react'
import * as S from './styled'
import dotLine from '@/assets/images/dot-line.svg'

const CafeCoupon = ({ cafeName, price, count }) => {
  return (
    <div>
      <S.CouponLeftWrapper>
        <S.CouponEdge></S.CouponEdge>
        <S.CouponContentBox>
          <img src={dotLine} />
        </S.CouponContentBox>
      </S.CouponLeftWrapper>
      <div></div>
    </div>
  )
}

export default CafeCoupon
