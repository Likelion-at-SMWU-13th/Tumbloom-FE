import React from 'react'
import styled from 'styled-components'
import cafeListImg from '@/assets/images/cafe-list.svg'
import locImg from '@/assets/icons/cafe-info-loc.svg'
import timeImg from '@/assets/icons/cafe-info-time.svg'
import * as S from '@/components/common/CafeListCard.Styled'

function CafeListCard({ name, loc, time, image }) {
  return (
    <S.Container>
      <S.LeftCard>
        <S.CafeName>{name}</S.CafeName>
        <S.InfoBox>
          <S.LocBox>
            <S.LocImg src={locImg} />
            <S.Loc>{loc}</S.Loc>
          </S.LocBox>
          <S.TimeBox>
            <S.LocImg src={timeImg} />
            <S.Time>{time}</S.Time>
          </S.TimeBox>
        </S.InfoBox>
        <S.StampBtn>스탬프 적립</S.StampBtn>
      </S.LeftCard>
      <S.RightCard>
        <S.CafeImg src={image} />
      </S.RightCard>
    </S.Container>
  )
}

export default CafeListCard
