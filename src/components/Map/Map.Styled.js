import styled from 'styled-components'

// KakaoMap.jsx
export const MapWrapper = styled.div`
  width: 100%;
  height: 100dvh;
  position: absolute;
  inset: 0;
  z-index: 0;
`

// MapBtn.jsx
export const Btn = styled.button`
  display: inline-flex;
  height: 2.375rem;
  padding: 0 0.9375rem;
  align-items: center;
  gap: 0.4375rem;
  flex-shrink: 0;
  border-radius: 18.75rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.15);
  border: none;
  cursor: pointer;
`

export const BtnImg = styled.img`
  aspect-ratio: 1/1;
`

export const BtnText = styled.span`
  color: #000;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

// MapCafeCard.jsx
export const Container = styled.div`
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
  cursor: pointer;
`

export const TopContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 21.74rem;
  padding-top: 0.8rem;
`

export const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 1.2rem;
`

export const LeftCard = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding-top: 0.75rem;
  padding-bottom: 1.38rem;
`

export const RightCard = styled.div`
  padding-top: 0.75rem;
  padding-bottom: 1.38rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 1.25rem;
`

export const StampBtn = styled.button`
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

export const CafeName = styled.span`
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-bottom: 0.31rem;
  cursor: pointer;
`

export const Scrab = styled.button`
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

export const ScrabState = styled.img`
  width: 1.5625rem;
  height: 1.5625rem;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  cursor: pointer;
`

export const Loc = styled.span`
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

export const Time = styled.span`
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

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 0.38rem;
  padding-top: 0.69rem;
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

// SearchBox.jsx
export const SearchInput = styled.input`
  display: flex;
  width: 22.0625rem;
  height: 3.0625rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
  border: none;
  padding-top: 0.25rem;
  padding-left: 3.06rem;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  &::placeholder {
    color: #757575;
    font-family: 'Pretendard Variable';
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`

export const SearchInputContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`

export const SearchIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  position: absolute;
  left: 1.2rem;
`

// Map.jsx

export const MapContainer = styled.div`
  position: relative;
  width: 100%;
`

export const Wrapper = styled.div`
  display: flex;
  inset: 0;
  flex-direction: column;
  padding-top: 3rem;
  position: absolute;
  padding-bottom: 5.6875rem;
  align-items: center;
`

export const HeaderBtns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.6rem;
  padding-top: 0.88rem;
`

export const FooterBtns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 13rem;
  padding-bottom: 1rem;
  z-index: 10;
  position: fixed;
`
export const MyLocBtn = styled.button`
  width: 2.625rem;
  height: 2.625rem;
  flex-shrink: 0;
  box-shadow: 0 2.1px 5.25px rgba(0, 0, 0, 0.15);
  background-color: transparent;
  border-radius: 10rem;
  border: none;
  background-color: #fff;
  cursor: pointer;
`

export const ListBtn = styled.button`
  display: inline-flex;
  height: 2.375rem;
  padding: 0 0.9375rem;
  align-items: center;
  gap: 0.4375rem;
  flex-shrink: 0;
  border-radius: 18.75rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.15);
  border: none;
  cursor: pointer;
  background-color: transparent;
  background-color: #fff;
`

export const ListBtnIcon = styled.img`
  aspect-ratio: 1/1;
`

export const ListBtnName = styled.span`
  color: #000;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
