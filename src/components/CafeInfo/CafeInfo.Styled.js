import styled from 'styled-components'

// CafeInfoBox.jsx
export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 22.1875rem;
  padding-left: 1.25rem;
`

export const InfoName = styled.span`
  color: #ababab;
  font-family: 'Pretendard Variable';
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  gap: 0.25rem;
`

export const Location = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.25rem;
  padding-bottom: 1.56rem;
`

export const BusinessHour = styled.div``

export const Time = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1.56rem;
`

export const Num = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1.19rem;
`

export const TimeRow = styled.div`
  display: flex;
  gap: 0.2rem;
`

export const LocInfoDetail = styled.span`
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

export const InfoDetail = styled.span`
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-top: 0.31rem;
  white-space: pre-line;
`

// MenuBox.jsx
export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
  height: 100%;
  padding-top: 1.25rem;
  box-sizing: border-box;
`

export const MenuRow = styled.div`
  display: grid;
  grid-template-columns: 6rem 3.9rem 3.9rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-left: 3.2rem;
  box-sizing: border-box;
  padding-right: 5.3rem;
`

export const MenuName = styled.span`
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const Line = styled.img`
  width: 4.375rem;
  height: 0.0625rem;
`

export const MenuPrice = styled.span`
  display: flex;
  justify-content: flex-end;
  padding-right: 0.4rem;
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
