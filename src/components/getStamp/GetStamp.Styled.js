import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  position: fixed;
  overflow: hidden;
  max-width: 440px;
  z-index: 11;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 24.5625rem;
  max-width: 100vw;
  align-items: center;
  justify-content: center;
`

export const BgImg = styled.img`
  opacity: 0.96;
  width: 100%;
  height: 100%;
  object-fit: cover;
  inset: 0;
`

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15.97rem;
  align-items: center;
  position: absolute;
`

export const ImgContainer = styled.div`
  display: flex;
  position: relative;
`

export const Img = styled.img``

export const Text = styled.span`
  top: 10.81rem;
  position: absolute;
  color: #fff;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-top: 16.01rem;
  width: 100%;
`
export const BtnContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  padding-top: 2.6rem;
  padding-bottom: 20rem;
`

export const GoHomeBtn = styled.button`
  background: transparent;
  display: flex;
  width: 7.23213rem;
  height: 2.5rem;
  padding: 0.89288rem 0;
  justify-content: center;
  align-items: center;
  gap: 0.89288rem;
  flex-shrink: 0;
  border-radius: 2.67856rem;
  border: 1.429px solid #fff;
  color: #fff;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 1.07144rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`
export const GoCouponBtn = styled.button`
  background: transparent;
  display: flex;
  width: 7.23213rem;
  height: 2.5rem;
  padding: 0.89288rem 0;
  justify-content: center;
  align-items: center;
  gap: 0.89288rem;
  flex-shrink: 0;
  border-radius: 2.67856rem;
  border: 1.429px solid #fff;
  color: #fff;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 1.07144rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`
