import React from 'react'
import * as S from './styled'

const PreferenceCard = () => {
  return (
    <S.PreferenceCard>
      <S.CardContent>
        <S.CardBadge>AI 취향분석</S.CardBadge>
        <S.CardTitle>텀블러인 AI가 당신의 카페를 찾아드립니다</S.CardTitle>
        <S.CardSubtitle>내 취향에 따라 텀블러인 AI에게 추천받을 수 있어요</S.CardSubtitle>
        <S.Preferencebtn>취향 선택하러 가기</S.Preferencebtn>
      </S.CardContent>
    </S.PreferenceCard>
  )
}

export default PreferenceCard
