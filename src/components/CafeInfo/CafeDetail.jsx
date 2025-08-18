import React from 'react'
import Header from '@/components/common/Header'
import styled from 'styled-components'
import scrabOn from '@/assets/icons/clicked-bookmark.svg'
import scrabOff from '@/assets/icons/bookmark.svg'
import cafeDetail from '@/assets/images/cafe-detail.svg'
import locIcon from '@/assets/icons/cafe-info-loc.svg'
import timeIcon from '@/assets/icons/cafe-info-time.svg'
import numIcon from '@/assets/icons/cafe-info-num.svg'

const CafeHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #d9d9d9;
  align-items: center;
`

const CafeHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.56rem 1.25rem 0.94rem 1.25rem;
  gap: 14rem;
  box-sizing: border-box;
`

const CafeName = styled.span`
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
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
`

const CafeImg = styled.img`
  width: 22.0625rem;
  height: 11.125rem;
  flex-shrink: 0;
  border-radius: 0.3125rem;
  background: url{cafeDetail} lightgray 50% / cover no-repeat;
`

const FilterTap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const InfoTap = styled.span`
  width: 10.5625rem;
  color: #000;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-bottom: 1.5px solid black;
  padding: 1.25rem 0 0.69rem 0;
`

const MenuTap = styled.span`
  width: 10.5625rem;
  color: #000;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-bottom: 1.5px solid black;
  padding: 1.25rem 0 0.69rem 0;
`

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

const StampBtn = styled.button`
  color: #fff;
  font-family: 'Pretendard Variable';
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
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
  border: none;
`
const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
`

function CafeDetail() {
  return (
    <div>
      <Header title='카페 상세정보' />
      <CafeHeaderWrapper>
        <CafeHeader>
          <CafeName>너드커피</CafeName>
          <Scrab>
            <ScrabState src={scrabOff} />
          </Scrab>
        </CafeHeader>
        <CafeImg />
      </CafeHeaderWrapper>
      <FilterTap>
        <InfoTap>기본정보</InfoTap>
        <MenuTap>메뉴</MenuTap>
      </FilterTap>
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
      <BtnContainer>
        <StampBtn>스탬프 적립하기</StampBtn>
      </BtnContainer>
    </div>
  )
}

export default CafeDetail
