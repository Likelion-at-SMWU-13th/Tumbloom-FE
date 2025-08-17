import styled from 'styled-components'
import search from '@/assets/icons/search.svg'

export const HeaderContainer = styled.div`
  display: flex;
  /* grid-template-columns: 3.5rem 1fr 3.5rem; */
  width: 24.5625rem;
  height: 3.5rem;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 1000;
  padding-top: 0;
  flex-shrink: 0;
  border-bottom: solid 0.0625rem #d9d9d9;
`

export const CouponChangeTap = styled.div`
  display: flex;
  width: 12.28125rem;
  height: 3.4rem;
  justify-content: center;
  align-items: center;
  border-bottom: solid 0.1875rem #000;
  /* border-radius: 0 0 0.625rem 0.625rem; */
  cursor: pointer;
`

export const MyCouponTap = styled.div`
  display: flex;
  width: 12.28125rem;
  height: 3.4rem;
  justify-content: center;
  align-items: center;
  /* border-bottom: solid 0.1875rem #000; */
  cursor: pointer;
`

export const TapText = styled.span`
  color: #000;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

export const ChangeTextBox = styled.div`
  /* border: solid 1px #000; */
  padding: 1rem 0 1rem 1.25rem;
`

export const ChangeText = styled.p`
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
`

export const HighlightText = styled.span`
  color: #25af94;
  font-family: 'Pretendard Variable';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

export const SearchArea = styled.div`
  padding-bottom: 2.44rem;
`

//CafeInputField.jsx

export const SearchInput = styled.input`
  display: flex;
  width: 22.0625rem;
  height: 3.0625rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.5rem;
  border: 1px solid #e1e1e1;
  background: #fff;
  padding-left: 3.14rem;
  box-sizing: border-box;
`

export const SearchInputContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`

export const SearchIcon = styled.img`
  position: absolute;
  left: 2.2rem;
`

//CafeCoupon.jsx

export const CouponLeftWrapper = styled.div`
  width: 15.7944rem;
  height: 6.75rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  /* border: solid 1px #000; */
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
`

export const CouponEdge = styled.div`
  background-color: #25af94;
  height: 6.75rem;
  width: 0.56rem;
  border-radius: 0.625rem 0 0 0.625rem;
`

export const CouponContentBox = styled.div`
  /* width: 15.2305rem; */
  /* width: 15.293rem; */
  width: 15.75rem;
  height: 5.625rem;
  flex-shrink: 0;
  border-right: dashed 2px #979797;
`
