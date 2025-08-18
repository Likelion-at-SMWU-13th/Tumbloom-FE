import React from 'react'
import Header from '@/components/common/Header'
import styled from 'styled-components'
import scrabOn from '@/assets/icons/clicked-bookmark.svg'
import scrabOff from '@/assets/icons/bookmark.svg'

const CafeHeaderWrapper = styled.div``

const CafeHeader = styled.div``

const CafeName = styled.h1`
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const Scrab = styled.button``

const CafeImg = styled.img``

const FilterTap = styled.div``

const InfoBox = styled.div``

const Location = styled.p``

const Time = styled.p``

const Num = styled.p``

const StampBtn = styled.button`
  display: flex;
  width: 22.0625rem;
  height: 3.5rem;
  padding: 0.66625rem 1.08263rem;
  justify-content: center;
  align-items: center;
  gap: 0.83281rem;
  flex-shrink: 0;
  border-radius: 24.98356rem;
  background: #25af94;
`

function CafeDetail() {
  return (
    <div>
      <Header title='카페 상세정보' />
      <CafeHeaderWrapper>
        <CafeHeader>
          <CafeName></CafeName>
          <Scrab>
            <img src={scrabOff} />
          </Scrab>
        </CafeHeader>
        <CafeImg />
      </CafeHeaderWrapper>
      <FilterTap>
        <span>기본정보</span>
        <span>메뉴</span>
      </FilterTap>
      <InfoBox>
        <Location>
          <p>위치</p>
          <p></p>
        </Location>
        <Time>
          <p>영업시간</p>
          <p></p>
        </Time>
        <Num>
          <p>연락처</p>
          <p></p>
        </Num>
      </InfoBox>
      <StampBtn></StampBtn>
    </div>
  )
}

export default CafeDetail
