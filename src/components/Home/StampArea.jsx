import React from 'react'
import * as S from './styled'
import stamp_card from '../../assets/images/stampcard_img.svg'

const StampArea = () => {
  return (
    <>
      <h2>내 텀블러 스탬프 (1/8)</h2>
      <img src={stamp_card} alt='stamp_card' />
    </>
  )
}

export default StampArea
