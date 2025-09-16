import styled from 'styled-components'

export const HeaderBox = styled.div`
  display: grid;
  grid-template-columns: 3.5rem 1fr 3.5rem;
  /* width: 24.5625rem; */
  width: 100%;
  height: 3.5rem;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 10;
  padding-top: 0;
  flex-shrink: 0;
  background-color: #fff;
  border-bottom: 1px solid #d9d9d9;
`

export const LeftArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0.5rem;
  padding-left: 1.65rem;
`

export const BackBtn = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  cursor: pointer;
`

export const TitleArea = styled.div`
  margin: 0;
  align-items: center;
  justify-content: center;
  display: flex;
  color: #000;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-top: 0.5rem;
`

export const RightArea = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 0.5rem;
`
