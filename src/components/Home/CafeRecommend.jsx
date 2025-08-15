import React from 'react'
import * as S from './styled'
import FilterTap from './FilterTap'
import CafeCarousel from './CafeCarousel'

const CafeRecommend = () => {
  return (
    <S.CafeRecommendWrapper>
      <S.CafeRecommendText>
        지금 계신 <S.HighlightText>청파동</S.HighlightText>의 텀블러 혜택 카페
      </S.CafeRecommendText>
      <CafeCarousel />
    </S.CafeRecommendWrapper>
  )
}

export default CafeRecommend
