import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import locImg from '@/assets/icons/cafe-info-loc.svg'
import timeImg from '@/assets/icons/cafe-info-time.svg'
import { useState, useEffect } from 'react'
import scrabOn from '@/assets/icons/clicked-bookmark.svg'
import scrabOff from '@/assets/icons/bookmark.svg'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  position: fixed;
  bottom: calc(5.6875rem + 3.5rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  width: 24.5625rem;
  height: 12.125rem;
  flex-shrink: 0;
  border-radius: 0.9375rem 0.9375rem 0 0;
  background: #fff;
  box-shadow: 0 -10px 17.6px 0 rgba(0, 0, 0, 0.25);
  transform: translateY(3.5rem);
  z-index: 100%;
  transition: all 0.3s ease;
`

const TopContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 21.74rem;
  padding-top: 0.8rem;
`

const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 1.2rem;
`

const LeftCard = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding-top: 0.75rem;
  padding-bottom: 1.38rem;
`

const RightCard = styled.div`
  padding-top: 0.75rem;
  padding-bottom: 1.38rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 1.25rem;
`

const StampBtn = styled.button`
  width: 7.94rem;
  height: 2.19rem;
  display: inline-flex;
  padding: 0.5rem 0.8125rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 16.57981rem;
  border: 1px solid #25af94;
  color: #fff;
  font-family: 'Pretendard Variable';
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background-color: #25af94;
  align-self: flex-start;
  cursor: pointer;
`

const CafeName = styled.span`
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-bottom: 0.31rem;
  cursor: pointer;
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
  font-weight: 500;
  line-height: normal;
  width: 9rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const Time = styled.span`
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 9rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 0.08rem;
`

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 0.38rem;
  padding-top: 0.69rem;
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
  const navigate = useNavigate()

  const handleFav = (id, isFav) => {
    const at = localStorage.getItem('accessToken')
    if (!at || at === 'undefined') {
      console.error('no token')
      return
    }
    setCafe((prev) => (prev ? { ...prev, favorite: !isFav } : prev))

    const headers = { Authorization: `Bearer ${at}` }
    const req = isFav
      ? axios.delete(`https://tumbloom.store/api/favorites/${id}`, { headers })
      : axios.post(`https://tumbloom.store/api/favorites/${id}`, {}, { headers })

    req.catch((err) => {
      console.error(err)
      setCafe((prev) => (prev ? { ...prev, favorite: isFav } : prev))
    })
  }

  const goToDetail = () => {
    navigate('/detail', { state: { cafeId: cafeId } })
  }

  const goToGetStamp = () => {
    navigate('/stamp', { state: { cafeName: cafe.cName, cafeImg: cafe.img } })
  }

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
      favorite: !!info.favorite,
    })
  }

  useEffect(() => {
    cafeInfo(cafeId)
  }, [cafeId])

  if (!cafe) return null

  return (
    <Container>
      <TopContent>
        <CafeName onClick={goToDetail}>{cafe.cName}</CafeName>
        <Scrab>
          <ScrabState
            onClick={() => handleFav(cafe.id, !!cafe.favorite)}
            src={cafe.favorite ? scrabOn : scrabOff}
          />
        </Scrab>
      </TopContent>
      <ContentBox>
        <LeftCard>
          <CafeImg src={cafe.img} />
        </LeftCard>
        <RightCard>
          <StampBtn onClick={goToGetStamp}>스탬프 적립하기</StampBtn>
          <InfoBox>
            <LocBox>
              <LocImg src={locImg} />
              <Loc>{cafe.address}</Loc>
            </LocBox>
            <TimeBox>
              <TimeImg src={timeImg} />
              <Time>{cafe.t.substr(2, 13)}</Time>
            </TimeBox>
          </InfoBox>
        </RightCard>
      </ContentBox>
    </Container>
  )
}

export default MapCafeCard
