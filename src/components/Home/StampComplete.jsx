import React from 'react'
import * as S from './styled'
import { useNavigate } from 'react-router-dom'

const StampComplete = () => {
  const navigate = useNavigate()

  return (
    <S.StampComplete>
      <S.StampCompleteTitle>스탬프를 다 모았어요!</S.StampCompleteTitle>
      <S.CouponBtn onClick={() => navigate('/coupon')}>쿠폰 교환하러 가기</S.CouponBtn>
    </S.StampComplete>
  )
}

export default StampComplete
