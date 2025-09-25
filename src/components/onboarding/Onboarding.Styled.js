import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 440px;
  margin: 0 auto;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
`
export const Slide = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100dvh;
`

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 0 1.5rem 0;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  left: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 1;
`
export const OnBoardingImg = styled.img`
  flex-shrink: 0;
  width: 100%;
  height: auto;
`
export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const Title = styled.span`
  color: #000;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`
export const Desc = styled.span`
  color: #767676;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 0.81rem 0 0.81rem 0;
`
export const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  padding: 2.38rem 0 3rem 0;
`

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const NextBtn = styled.button`
  color: #fff;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  width: 22.0625rem;
  height: 4rem;
  padding: 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  border-radius: 1.875rem;
  background: #25af94;
  border: none;
  cursor: pointer;
`
