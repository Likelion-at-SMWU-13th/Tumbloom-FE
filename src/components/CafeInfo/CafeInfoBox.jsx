import React from 'react'
import locIcon from '@/assets/icons/cafe-info-loc.svg'
import timeIcon from '@/assets/icons/cafe-info-time.svg'
import numIcon from '@/assets/icons/cafe-info-num.svg'
import styled from 'styled-components'

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 22.1875rem;
  padding-left: 1.25rem;
`

const InfoName = styled.span`
  color: #ababab;
  font-family: 'Pretendard Variable';
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  gap: 0.25rem;
`

const Location = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.25rem;
  padding-bottom: 1.56rem;
`

const BusinessHour = styled.div``

const Time = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1.56rem;
`

const Num = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1.19rem;
`

const TimeRow = styled.div`
  display: flex;
  gap: 0.2rem;
`

const LocInfoDetail = styled.span`
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-top: 0.31rem;
  width: 18rem;
  white-space: pre-line;
  word-break: keep-all;
`

const InfoDetail = styled.span`
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-top: 0.31rem;
  white-space: pre-line;
`

function CafeInfoBox({ cafe }) {
  return (
    <>
      <InfoBox>
        <Location>
          <InfoName>
            <img src={locIcon} />
            위치
          </InfoName>
          <LocInfoDetail>
            {cafe.address}
            {cafe.detailAddress}
          </LocInfoDetail>
        </Location>
        <Time>
          <InfoName>
            <img src={timeIcon} />
            영업시간
          </InfoName>
          <InfoDetail>
            <TimeRow>
              <BusinessHour>{cafe.businessHours}</BusinessHour>
            </TimeRow>
          </InfoDetail>
        </Time>
        <Num>
          <InfoName>
            <img src={numIcon} />
            연락처
          </InfoName>
          <InfoDetail>{cafe.callNumber}</InfoDetail>
        </Num>
      </InfoBox>
    </>
  )
}

export default CafeInfoBox
