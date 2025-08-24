import React from 'react'
import styled from 'styled-components'
import onboarding1 from '@/assets/images/onboarding1.svg'
import onboarding2 from '@/assets/images/onboarding2.svg'
import onboarding3 from '@/assets/images/onboarding3.png'
import onboarding4 from '@/assets/images/onboarding4.png'
import onboarding5 from '@/assets/images/onboarding5.png'
import dotGreen from '@/assets/icons/green-circle.svg'
import dotGrey from '@/assets/icons/grey-circle.svg'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const OnBoardingPages = [
  {
    img: onboarding1,
    title: (
      <>
        텀블러인에 오신 <br /> 당신을 환영합니다!
      </>
    ),
    desc: (
      <>
        텀블러인은 모든 텀블러 유저를 위한,
        <br /> 텀블러 문화 활성화를 위한 서비스예요
      </>
    ),
  },
  {
    img: onboarding2,
    title: (
      <>
        우리동네 카페의 텀블러
        <br />
        혜택 정보를 한 눈에 확인해요
      </>
    ),
    desc: (
      <>
        어느 카페에서 할인을 제공하는지
        <br />
        정보가 필요한 분들을 위해 준비했어요
      </>
    ),
  },
  {
    img: onboarding3,
    title: (
      <>
        불편했던 할인 절차를
        <br />
        앱에서 간단하게 해결해요
      </>
    ),
    desc: (
      <>
        키오스크에서는 불가한 텀블러 할인,
        <br />
        직접 주문해야 해서 번거로웠어요
      </>
    ),
  },
  {
    img: onboarding4,
    title: (
      <>
        이제는 텀블러인에서
        <br />
        쿠폰 발급으로 혜택받아요
      </>
    ),
    desc: (
      <>
        우리 동네 텀블러 혜택 제공 카페들의
        <br />
        할인 쿠폰을 자유롭게 발급할 수 있어요
      </>
    ),
  },
  {
    img: onboarding5,
    title: (
      <>
        텀블러인과 우리동네
        <br />
        텀블러 문화 만들어요
      </>
    ),
    desc: (
      <>
        일회용품 절감으로 더 나아질 우리동네,
        <br />
        텀블러인이 유저님과 함께 만들 미래
      </>
    ),
  },
]

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 24.5625rem;
  margin: 0 auto;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
`
const Slide = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100dvh;
`

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 1.5rem 0;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  left: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 1;
`
const OnBoardingImg = styled.img`
  flex-shrink: 0;
`
const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Title = styled.span`
  color: #000;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`
const Desc = styled.span`
  color: #767676;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 0.81rem 0 0.81rem 0;
`
const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  padding: 2.38rem 0 3rem 0;
`

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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
  cursor: pointer;
`

function OnBoarding() {
  const [page, setPage] = useState(1)
  const totalPages = 5

  let onb = OnBoardingPages[page - 1]
  const navigate = useNavigate()

  return (
    <>
      <Wrapper>
        <AnimatePresence mode='wait'>
          <Slide
            key={page}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.2 }}
          >
            <ImgContainer
              style={{ justifyContent: page === 1 ? 'flex-end' : 'center', padding: onb.padding }}
            >
              <OnBoardingImg src={onb.img} />
            </ImgContainer>
            <ContentContainer>
              <TextContainer>
                <Title>{onb.title}</Title>
                <Desc>{onb.desc}</Desc>
              </TextContainer>
              <DotContainer>
                {[0, 1, 2, 3, 4].map((i) => (
                  <img key={i} src={i === page - 1 ? dotGreen : dotGrey} />
                ))}
              </DotContainer>
              <BtnContainer>
                <NextBtn
                  onClick={() => {
                    if (page < totalPages) {
                      setPage(page + 1)
                    } else {
                      navigate('/login')
                    }
                  }}
                >
                  {page === totalPages ? '텀블러인 시작하기' : '다음'}
                </NextBtn>
              </BtnContainer>
            </ContentContainer>
          </Slide>
        </AnimatePresence>
      </Wrapper>
    </>
  )
}

export default OnBoarding
