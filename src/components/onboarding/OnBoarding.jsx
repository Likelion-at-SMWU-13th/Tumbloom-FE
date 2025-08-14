import React from 'react'
import styled from 'styled-components'
import onboarding1 from '@/assets/images/onboarding1.svg'
import onboarding2 from '@/assets/images/onboarding2.svg'
import onboarding3 from '@/assets/images/onboarding3.svg'
import onboarding4 from '@/assets/images/onboarding4.svg'
import onboarding5 from '@/assets/images/onboarding5.svg'
import dotGreen from '@/assets/icons/green-circle.svg'
import dotGrey from '@/assets/icons/grey-circle.svg'
import { useState } from 'react'

const OnBoardingPages = [
  {
    img: onboarding1,
    padding: '5.6rem 0 3.53rem 0',
    w: '17.125rem',
    h: '14.21456rem',
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
    padding: '5.6rem 0 3rem 0',
    w: '25.125rem',
    h: '20.12294rem',
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
    padding: '3rem 0 1.91rem 0',
    w: '30.53713rem',
    h: '20.15625rem',
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
    padding: '3rem 0 2.61rem 0',
    w: '29.76644rem',
    h: '20.32413rem',
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
    padding: '5.6rem 0 1.25rem 0',
    w: '31.97806rem',
    h: '22.18544rem',
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

const Header = styled.div`
  display: flex;
  width: 24.5625rem;
  height: 3.5rem;
  background-color: #ffffffff;
`

const ImgContainer = styled.div`
  display: flex;
  padding: 0 0 3.53rem 0;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  left: 0;
  bottom: 0;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 1;
`
const OnBoardingImg = styled.img`
  flex-shrink: 0;
  filter: drop-shadow(7px 8.7px 7px rgba(0, 0, 0, 0.31));
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
  padding: 2.38rem 0 4.56rem 0;
`

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 5.44rem 0;
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
`

function OnBoarding() {
  const [page, setPage] = useState(1)
  const totalPages = 5

  let onb = OnBoardingPages[page - 1]

  return (
    <>
      <Header />
      <ImgContainer
        style={{ justifyContent: page === 1 ? 'flex-end' : 'center', padding: onb.padding }}
      >
        <OnBoardingImg
          src={onb.img}
          style={{
            width: onb.w,
            height: onb.h,
            filter: page === 4 ? 'drop-shadow(7px 8px 7px rgba(0, 0, 0, 0.31))' : 'none',
          }}
        />
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
              }
            }}
          >
            {page === totalPages ? '텀블러인 시작하기' : '다음'}
          </NextBtn>
        </BtnContainer>
      </ContentContainer>
    </>
  )
}

export default OnBoarding
