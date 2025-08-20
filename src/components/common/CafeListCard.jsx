import React from 'react'
import styled from 'styled-components'
import cafeListImg from '@/assets/images/cafe-list.svg'
import locImg from '@/assets/icons/cafe-info-loc.svg'
import timeImg from '@/assets/icons/cafe-info-time.svg'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0;
`

const LeftCard = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding-top: 1.38rem;
  padding-bottom: 1.38rem;
`

const RightCard = styled.div`
  padding-top: 1.38rem;
  padding-bottom: 1.38rem;
  display: flex;
  align-items: center;
`

const StampBtn = styled.button`
  width: 5.7rem;
  height: 1.95rem;
  display: inline-flex;
  padding: 0.44213rem 0.71844rem;
  justify-content: center;
  align-items: center;
  gap: 0.55269rem;
  border-radius: 16.57981rem;
  border: 1px solid #25af94;
  color: #25af94;
  font-family: 'Pretendard Variable';
  font-size: 0.86419rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background-color: transparent;
  align-self: flex-start;
`

const CafeName = styled.span`
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-bottom: 0.31rem;
  padding-right: 8.37rem;
`

const Loc = styled.span`
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const Time = styled.span`
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 0.38rem;
`

const LocBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.1rem;
`

const TimeBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.1rem;
`

const LocImg = styled.img`
  width: 0.875rem;
  height: 0.875rem;
  aspect-ratio: 1/1;
`

const TimeImg = styled.img`
  width: 0.875rem;
  height: 0.875rem;
  aspect-ratio: 1/1;
`

const CafeImg = styled.img`
  width: 9.3125rem;
  height: 6.8125rem;
  flex-shrink: 0;
  border-radius: 0.3125rem;
`

function CafeListCard({ name, loc, time }) {
  return (
    <Container>
      <LeftCard>
        <CafeName>{name}</CafeName>
        <InfoBox>
          <LocBox>
            <LocImg src={locImg} />
            <Loc>{loc}</Loc>
          </LocBox>
          <TimeBox>
            <LocImg src={timeImg} />
            <Time>{time}</Time>
          </TimeBox>
        </InfoBox>
        <StampBtn>스탬프 적립</StampBtn>
      </LeftCard>
      <RightCard>
        <CafeImg src={cafeListImg} />
      </RightCard>
    </Container>
  )
}

export default CafeListCard
