import React from 'react'
import backBtn from '../../assets/icons/back-btn.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import * as S from '@/components/Coupon/styled'

function CouponPrev({ title, onLeftClick }) {
  const navigate = useNavigate()

  return (
    <S.HeaderBox>
      <S.LeftArea>
        <S.BackBtn src={backBtn} onClick={onLeftClick}></S.BackBtn>
      </S.LeftArea>
      <S.TitleArea>{title}</S.TitleArea>
      <S.RightArea></S.RightArea>
    </S.HeaderBox>
  )
}
export default CouponPrev
