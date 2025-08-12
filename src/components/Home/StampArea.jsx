import React from 'react'
import * as S from './styled'
import stamp_card from '../../assets/images/stampcard_img.svg'
import StampComplete from './StampComplete'

const StampArea = () => {
  return (
    <div>
      <S.MyStamp>내 텀블러 스탬프 (1/8)</S.MyStamp>
      <img src={stamp_card} alt='stamp_card' />
    </div>
  )
}

export default StampArea
