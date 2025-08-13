import React from 'react'
import styled from 'styled-components'
import onboardingImg from '@/assets/images/onboarding1.svg'
import dotGreen from '@/assets/icons/green-circle.svg'
import dotGrey from '@/assets/icons/grey-circle.svg'

const Header = styled.div`
  display: flex;
  width: 24.5625rem;
  height: 3.5rem;
  background-color: #25af94;
`

const ImgContainer = styled.div`
  display: flex;
  border: 1px solid pink;
  justify-content: flex-end;
  padding: 10rem 0 3.53rem 0;
`
const OnBoardingImg = styled.img`
  width: 17.125rem;
  height: 14.21456rem;
  flex-shrink: 0;
  border: 1px solid pink;
`
const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid pink;
`
const Title = styled.span`
  color: #000;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: 1px solid pink;
`
const Desc = styled.span`
  color: #767676;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: 1px solid pink;
  padding: 0.81rem 0 0.81rem 0;
`
const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid pink;
  gap: 0.5rem;
  padding: 2.38rem 0 4.56rem 0;
`

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid pink;
  padding: 0 0 5.44rem 0;
`

const NextBtn = styled.button`
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
`

function OnBoarding() {
  return (
    <>
      <Header />
      <ImgContainer>
        <OnBoardingImg src={onboardingImg} alt='Onboarding Logo' />
      </ImgContainer>
      <TextContainer>
        <Title>
          텀블러인에 오신 <br />
          당신을 환영합니다!
        </Title>
        <Desc>
          텀블러인은 모든 텀블러 유저를 위한,
          <br /> 텀블러 문화 활성화를 위한 서비스예요
        </Desc>
      </TextContainer>
      <DotContainer>
        {[0, 1, 2, 3, 4].map((i) => (
          <img key={i} src={i === 0 ? dotGreen : dotGrey} />
        ))}
      </DotContainer>
      <BtnContainer>
        <NextBtn>다음</NextBtn>
      </BtnContainer>
    </>
  )
}

export default OnBoarding
