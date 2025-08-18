import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-top: 1px solid #d9d9d9;
`

export const CafeImage = styled.img`
  width: 9.375rem;
  height: 9.375rem;
  flex-shrink: 0;
  border-radius: 9.375rem;
  margin-top: 4.25rem;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.44rem 0 1.69rem 0;
`

export const CafeName = styled.p`
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
`

export const DiscountPrice = styled.p`
  color: #25af94;
  font-family: 'Pretendard Variable';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
`

export const ExpiryDateContainer = styled.div`
  display: flex;
  width: 12.0625rem;
  height: 4.125rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.625rem;
  background: #deeeeb;
  flex-direction: column;
  margin-bottom: 7.62rem;
`

export const ExpiryDate = styled.p`
  color: #005c4a;
  font-family: 'Pretendard Variable';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
`

export const Button = styled.button`
  display: flex;
  width: 10.5625rem;
  height: 3.22844rem;
  justify-content: center;
  align-items: center;
  gap: 0.83281rem;
  flex-shrink: 0;
  border-radius: 24.98356rem;
  background: #25af94;
  border: none;
  color: #fff;
  font-family: 'Pretendard Variable';
  font-size: 1.33244rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
  z-index: 2;
`

export const StampBg = styled.img`
  width: 20rem;
  height: 20rem;
  flex-shrink: 0;
  opacity: 0.1;
  position: absolute;
  top: 76%;
  left: -25%;
`
