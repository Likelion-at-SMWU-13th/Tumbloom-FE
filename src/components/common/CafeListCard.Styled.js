import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1.2rem;
  margin: 0;
  cursor: pointer;
`

export const LeftCard = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding-top: 1.38rem;
  padding-bottom: 1.38rem;
  flex: 1;
`

export const RightCard = styled.div`
  padding-top: 1.38rem;
  padding-bottom: 1.38rem;
  display: flex;
  align-items: center;
`

export const StampBtn = styled.button`
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
  cursor: pointer;
`

export const CafeName = styled.span`
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-bottom: 0.31rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 11rem;
`

export const Loc = styled.span`
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 9rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const Time = styled.span`
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 7rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transform: translateY(-0.09rem);
  padding-left: 0.08rem;
`

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 0.38rem;
`

export const LocBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.1rem;
`

export const TimeBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.1rem;
`

export const LocImg = styled.img`
  width: 0.875rem;
  height: 0.875rem;
  aspect-ratio: 1/1;
`

export const TimeImg = styled.img`
  width: 0.875rem;
  height: 0.875rem;
  aspect-ratio: 1/1;
`

export const CafeImg = styled.img`
  width: 9.3125rem;
  height: 6.8125rem;
  flex-shrink: 0;
  border-radius: 0.3125rem;
  object-fit: cover;
`
