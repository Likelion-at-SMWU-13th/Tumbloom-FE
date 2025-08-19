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

const Day = styled.div``

const Hour = styled.div``

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

const days = [
  { key: 'mon', label: '월' },
  { key: 'tue', label: '화' },
  { key: 'wed', label: '수' },
  { key: 'thu', label: '목' },
  { key: 'fri', label: '금' },
  { key: 'sat', label: '토' },
  { key: 'sun', label: '일' },
]

const CafeInfoList = {
  time: {
    mon: '09:00 - 15:00',
    tue: '09:00 - 15:00',
    wed: '09:00 - 15:00',
    thu: '09:00 - 15:00',
    fri: '09:00 - 15:00',
    sat: '09:00 - 15:00',
    sun: '09:00 - 15:00',
  },
  location: '서울시 용산구 청파로47 78 제1호 내제1층호\n4호선 숙대입구역 10번 출구에서 572m',
  number: '02-222-222',
}

function CafeInfoBox() {
  return (
    <>
      <InfoBox>
        <Location>
          <InfoName>
            <img src={locIcon} />
            위치
          </InfoName>
          <InfoDetail>{CafeInfoList.location}</InfoDetail>
        </Location>
        <Time>
          <InfoName>
            <img src={timeIcon} />
            영업시간
          </InfoName>
          <InfoDetail>
            {days.map((d) => (
              <TimeRow key={d.key}>
                <Day>{d.label}</Day>
                <Hour>{CafeInfoList.time[d.key]}</Hour>
              </TimeRow>
            ))}
          </InfoDetail>
        </Time>
        <Num>
          <InfoName>
            <img src={numIcon} />
            연락처
          </InfoName>
          <InfoDetail>{CafeInfoList.number}</InfoDetail>
        </Num>
      </InfoBox>
    </>
  )
}

export default CafeInfoBox
