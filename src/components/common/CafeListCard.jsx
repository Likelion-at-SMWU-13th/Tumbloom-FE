import React from 'react'
import locImg from '@/assets/icons/cafe-info-loc.svg'
import timeImg from '@/assets/icons/cafe-info-time.svg'
import * as S from '@/components/common/CafeListCard.Styled'
import { useNavigate } from 'react-router-dom'

function CafeListCard({ id, name, loc, time, image }) {
  const navigate = useNavigate()

  const goToDetail = () => {
    navigate(`/detail/${id}`)
  }

  const goToGetStamp = () => {
    navigate(`/stamp/${id}`)
  }
  return (
    <S.Container onClick={goToDetail}>
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
        <S.StampBtn
          onClick={(e) => {
            e.stopPropagation()
            goToGetStamp()
          }}
        >
          스탬프 적립
        </S.StampBtn>
      </S.LeftCard>
      <S.RightCard>
        <S.CafeImg src={image} />
      </S.RightCard>
    </S.Container>
  )
}

export default CafeListCard
