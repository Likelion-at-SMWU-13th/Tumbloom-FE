import React from 'react'
import * as S from './styled'
import stamp_card from '../../assets/images/stampcard_img.svg'
import StampComplete from './StampComplete'

const StampArea = () => {
  return (
    <S.StampArea>
      <S.MyStamp>내 텀블러 스탬프 (1/8)</S.MyStamp>
      <S.StampCard src={stamp_card} alt='stamp_card' />
    </S.StampArea>
  )
}

export default StampArea
