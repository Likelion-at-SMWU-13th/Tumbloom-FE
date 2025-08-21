import React from 'react'
import styled from 'styled-components'
import locImg from '@/assets/icons/cafe-info-loc.svg'
import timeImg from '@/assets/icons/cafe-info-time.svg'
import { useState, useEffect } from 'react'
import scrabOn from '@/assets/icons/clicked-bookmark.svg'
import scrabOff from '@/assets/icons/bookmark.svg'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0;
`

const TopContent = styled.div`
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

const Scrab = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5625rem;
  height: 1.5625rem;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  border: none;
  background-color: transparent;
`

const ScrabState = styled.img`
  width: 1.5625rem;
  height: 1.5625rem;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  cursor: pointer;
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
  object-fit: cover;
`

function MapCafeCard({ cafeId }) {
  const [active, setActive] = useState(false)
  const [cafe, setCafe] = useState(null)

  const cafeInfo = async (cafeId) => {
    if (!cafeId) return
    const at = localStorage.getItem('accessToken')
    if (!at || at === 'undefined') {
      console.log('로컬스토리지에 accessToken 없음')
      return
    }
    const res = await fetch(`https://tumbloom.store/api/cafes/${cafeId}`, {
      headers: { Authorization: `Bearer ${at}` },
    })

    const json = await res.json()
    const info = json.data

    setCafe({
      id: info.id,
      cName: info.cafeName,
      address: info.address,
      t: info.businessHours,
      img: info.imageUrl,
    })
  }

  useEffect(() => {
    cafeInfo(cafeId)
  }, [cafeId])

  if (!cafe) return null

  return (
    <Container>
      <TopContent>
        <CafeName>{cafe.cName}</CafeName>
        <Scrab>
          <ScrabState
            onClick={() => setActive((prev) => !prev)}
            src={active ? scrabOn : scrabOff}
          />
        </Scrab>
      </TopContent>
      <LeftCard>
        <CafeImg src={cafe.img} />
      </LeftCard>
      <RightCard>
        <StampBtn>스탬프 적립</StampBtn>
        <InfoBox>
          <LocBox>
            <LocImg src={locImg} />
            <Loc>{cafe.address}</Loc>
          </LocBox>
          <TimeBox>
            <LocImg src={timeImg} />
            <Time>{cafe.t}</Time>
          </TimeBox>
        </InfoBox>
      </RightCard>
    </Container>
  )
}

export default MapCafeCard
