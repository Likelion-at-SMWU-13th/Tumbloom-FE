import React from 'react'
import * as S from './styled'
import coupon from '@/assets/icons/coupon-mypage.svg'
import bookmark from '@/assets/icons/bookmark-mypage.svg'

const MyPageBox = ({ type, title, value, onClick }) => {
  const isCoupon = type === 'coupon'

  return (
    <S.Box onClick={onClick}>
      <img src={isCoupon ? coupon : bookmark} />
      <S.BoxTitle>{title}</S.BoxTitle>
      <S.BoxValue>
        {value} {isCoupon ? '장' : '곳'}
      </S.BoxValue>
    </S.Box>
  )
}

export default MyPageBox
