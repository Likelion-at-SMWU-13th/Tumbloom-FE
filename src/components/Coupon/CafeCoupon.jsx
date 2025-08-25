import React from 'react'
import * as S from './styled'
import { useNavigate } from 'react-router-dom'
import dotLine from '@/assets/images/dot-line.svg'
import change from '@/assets/icons/change.svg'
import stamp from '@/assets/images/stamp_img.svg'
import changeGray from '@/assets/icons/change-gray.svg'
import useIcon from '@/assets/icons/coupon-use.svg'

const CafeCoupon = ({
  id = 0,
  cafeName,
  price,
  count = 0,
  active,
  type,
  expiryDate = '',
  onClickExchange,
}) => {
  const navigate = useNavigate()
  const isExchange = type === 'exchange'
  return (
    <S.CouponWrapper>
      <S.CouponLeftWrapper>
        <S.CouponEdge></S.CouponEdge>
        <S.CouponLeftContent>
          <S.CafeName style={{ color: active ? '#000' : '#979797' }}>{cafeName}</S.CafeName>
          <S.CafeDiscount style={{ color: active ? '#000' : '#979797' }}>{price}원</S.CafeDiscount>
          {isExchange ? (
            <S.CafeCouponCount>
              잔여수량 <span style={{ fontWeight: '600' }}>{count}개</span>
            </S.CafeCouponCount>
          ) : (
            <S.CafeCouponCount>유효기간 {expiryDate}</S.CafeCouponCount>
          )}
        </S.CouponLeftContent>
        <S.StampBg src={stamp} />
        <S.DotLine src={dotLine} />
      </S.CouponLeftWrapper>
      <S.CouponRightWrapper style={{ cursor: active ? 'pointer' : 'default' }}>
        <S.CouponRightContent
          onClick={() => {
            if (!active) return
            if (isExchange) onClickExchange(id)
            else navigate(`/couponDetail/${id}`)
          }}
        >
          <S.ChangeIcon src={isExchange ? (active ? change : changeGray) : useIcon} />
          <S.ChangeText style={{ color: active ? '#000' : '#BCC6C4' }}>
            {isExchange ? '교환하기' : '사용하기'}
          </S.ChangeText>
        </S.CouponRightContent>
      </S.CouponRightWrapper>
    </S.CouponWrapper>
  )
}

export default CafeCoupon
