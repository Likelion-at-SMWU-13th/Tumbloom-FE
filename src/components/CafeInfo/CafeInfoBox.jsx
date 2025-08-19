import React from 'react'
import locIcon from '@/assets/icons/cafe-info-loc.svg'
import timeIcon from '@/assets/icons/cafe-info-time.svg'
import numIcon from '@/assets/icons/cafe-info-num.svg'
import styled from 'styled-components'

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1.25rem;
`

const InfoName = styled.span`
  border: 1px solid black;
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

const InfoDetail = styled.span`
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-top: 0.31rem;
`

function CafeInfoBox() {
  return (
    <>
      <InfoBox>
        <Location>
          <InfoName>
            <img src={locIcon} />
            위치
          </InfoName>
          <InfoDetail>
            월 09:00 - 15:00
            <br /> 화 09:00 - 15:00 <br />수 09:00 - 15:00 <br />목 09:00 - 15:00 <br />금 09:00 -
            15:00
            <br /> 토 09:00 - 15:00
            <br />일 09:00 - 15:00
          </InfoDetail>
        </Location>
        <Time>
          <InfoName>
            <img src={timeIcon} />
            영업시간
          </InfoName>
          <InfoDetail>
            서울시 용산구 청파로47 78 제1호 내제1층호
            <br />
            4호선 숙대입구역 10번 출구에서 572m
          </InfoDetail>
        </Time>
        <Num>
          <InfoName>
            <img src={numIcon} />
            연락처
          </InfoName>
          <InfoDetail>02-222-222</InfoDetail>
        </Num>
      </InfoBox>
    </>
  )
}

export default CafeInfoBox
