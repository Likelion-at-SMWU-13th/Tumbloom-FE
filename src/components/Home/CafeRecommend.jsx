import React from 'react'
import * as S from './styled'
import FilterTap from './FilterTap'
import CafeCarousel from './CafeCarousel'

const CafeRecommend = () => {
  return (
    <S.CafeRecommendWrapper>
      <S.CafeRecommendText>텀블러 혜택 카페 추천받기</S.CafeRecommendText>
      <CafeCarousel />
    </S.CafeRecommendWrapper>
  )
}

export default CafeRecommend
