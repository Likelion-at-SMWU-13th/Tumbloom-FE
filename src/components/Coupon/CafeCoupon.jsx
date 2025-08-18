import React from 'react'
import * as S from './styled'
import dotLine from '@/assets/images/dot-line.svg'
import change from '@/assets/icons/change.svg'
import stamp from '@/assets/images/stamp_img.svg'
import changeGray from '@/assets/icons/change-gray.svg'

const CafeCoupon = ({ cafeName, price, count, active }) => {
  return (
    <S.CouponWrapper>
      <S.CouponLeftWrapper>
        <S.CouponEdge></S.CouponEdge>
        <S.CouponLeftContent>
          <S.CafeName style={{ color: active ? '#000' : '#979797' }}>{cafeName}</S.CafeName>
          <S.CafeDiscount style={{ color: active ? '#000' : '#979797' }}>{price}원</S.CafeDiscount>
          <S.CafeCouponCount>
            잔여수량 <span style={{ fontWeight: '600' }}>{count}개</span>
          </S.CafeCouponCount>
        </S.CouponLeftContent>
        <S.StampBg src={stamp} />
        <S.DotLine src={dotLine} />
      </S.CouponLeftWrapper>
      <S.CouponRightWrapper style={{ cursor: active ? 'pointer' : 'default' }}>
        <S.CouponRightContent>
          <S.ChangeIcon src={active ? change : changeGray} />
          <S.ChangeText style={{ color: active ? '#000' : '#BCC6C4' }}>교환하기</S.ChangeText>
        </S.CouponRightContent>
      </S.CouponRightWrapper>
    </S.CouponWrapper>
  )
}

export default CafeCoupon
