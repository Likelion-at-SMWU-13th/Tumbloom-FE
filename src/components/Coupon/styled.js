import styled from 'styled-components'
import search from '@/assets/icons/search.svg'

export const HeaderContainer = styled.div`
  display: flex;
  /* width: 24.5625rem; */
  width: 100%;
  height: 3.5rem;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 1000;
  padding-top: 0;
  flex-shrink: 0;
  border-bottom: solid 0.0625rem #d9d9d9;
  background-color: #fff;
`

export const CouponChangeTap = styled.div`
  display: flex;
  /* width: 12.28125rem; */
  width: 50%;
  height: 3.4rem;
  justify-content: center;
  align-items: center;
  /* border-bottom: solid 0.1875rem #000; */
  cursor: pointer;
`

export const MyCouponTap = styled.div`
  display: flex;
  /* width: 12.28125rem; */
  width: 50%;
  height: 3.4rem;
  justify-content: center;
  align-items: center;
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

export const Wrapper = styled.div`
  /* overflow-y: auto; */
  /* height: 43.5rem; */
  /* flex: 1; */
  /* width: 24.5625rem; */
  /* padding-top: 3.5rem; */
  padding-bottom: 6rem;
`

export const ChangeTextBox = styled.div`
  padding: 1rem 0 1rem 1.25rem;
`

export const CurrentChangeText = styled.p`
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
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

export const SearchArea = styled.div`
  padding-bottom: 2.44rem;
`

export const NearCouponText = styled.p`
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
  padding: 0 0 0.405rem 1.56rem;
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
  left: 1.8rem;
`

export const CouponList = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

//CafeCoupon.jsx

export const CouponWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0.405rem 0;
`

export const StampBg = styled.img`
  display: flex;
  position: absolute;
  left: 10.4rem;
  transform: translateY(-28%);
  width: 6.26769rem;
  height: 6.26769rem;
  flex-shrink: 0;
  opacity: 0.06;
`

export const CouponLeftWrapper = styled.div`
  width: 15.7944rem;
  height: 6.75rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  /* border: solid 1px #000; */
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  position: relative;
`

export const CouponEdge = styled.div`
  background-color: #25af94;
  height: 6.75rem;
  width: 0.56rem;
  border-radius: 0.625rem 0 0 0.625rem;
`

export const CouponLeftContent = styled.div`
  display: flex;
  width: 14.7405rem;
  height: 5.625rem;
  flex-shrink: 0;
  flex-direction: column;
  /* justify-content: center; */
`

export const CafeName = styled.span`
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  padding: 0.3rem 0 0.5rem 1.38rem;
`

export const CafeDiscount = styled.span`
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  padding: 0 0 0 1.38rem;
  margin-top: -0.3rem;
`

export const CafeCouponCount = styled.span`
  color: #979797;
  font-family: 'Pretendard Variable';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  text-align: end;
  padding: 0.8rem 0.5rem 0 0;
`

export const DotLine = styled.img`
  padding-left: 0.49rem;
`

export const CouponRightWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6.33038rem;
  height: 6.75rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  background: #f6fcfb;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  z-index: 2;
`

export const CouponRightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: cneter;
  align-items: center;
`

export const ChangeIcon = styled.img`
  width: 2.25638rem;
  height: 2.25638rem;
  flex-shrink: 0;
`

export const ChangeText = styled.p`
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0 0 0 0;
`

//MyCoupon.jsx

export const MyCouponWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.4rem;
  overflow-y: auto;
  /* height: 42rem; */
  /* padding-top: 3.5rem; */
  padding-bottom: 6rem;
`

export const AvailableCouponBox = styled.div`
  display: inline-flex;
  padding: 0.625rem 0.9375rem;
  justify-content: center;
  align-items: center;
  border-radius: 18.75rem;
  background: #deeeeb;
  margin-top: 1.94rem;
`

export const AvailableCouponText = styled.p`
  color: #005c4a;
  font-family: 'Pretendard Variable';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
`
