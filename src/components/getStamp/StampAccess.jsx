import React from 'react'
import CafeImg from '@/assets/images/get-stamp-cafe.png'
import Header from '@/components/common/Header'
import styled from 'styled-components'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GetStamp from '@/components/getStamp/GetStamp'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const TopImage = styled.div`
  width: 24.5625rem;
  height: 13.75rem;
  flex-shrink: 0;
  position: relative;
`

const BgImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`

const ImgEffect = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.55) 55%,
    #fff 85%
  );
`

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  inset: 0;
  position: absolute;
  align-items: center;
  justify-content: flex-start;
  padding-top: 11.56rem;
`

const Title = styled.span`
  padding-bottom: 0.94rem;
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  text-align: center;
`
const CafeName = styled.span`
  color: #25af94;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 2.275rem */
`
const Desc = styled.span`
  color: #767676;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`
const AccessCodeBox = styled.div`
  display: flex;
  flex-direction: column;
`
const AccessCodeHeader = styled.span`
  color: #000;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 7.63rem 0 0.62rem;
`
const InputField = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 3.3rem;
`

const CodeInput = styled.input`
  width: 16.4375rem;
  height: 3.0625rem;
  flex-shrink: 0;
  border-radius: 0.3125rem;
  background: #e9f4f2;
  border: none;
  padding-left: 1.12rem;
  color: #005c4a;
  font-family: Inter;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  outline: none;

  &::placeholder {
    color: #b1cac5;
    font-family: 'Pretendard Variable';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  &.error {
    color: #c00000;
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border-radius: 0.3125rem;
    background: #ffe4e4;
  }
`
const CompleteBtn = styled.button`
  width: 3.125rem;
  height: 2.8125rem;
  flex-shrink: 0;
  border-radius: 0.3125rem;
  opacity: 0.6;
  background: #fff;
  color: #767676;
  font-family: 'Pretendard Variable';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  right: 3.3rem;
  position: relative;
  transform: translateY(0.17rem);
  border: none;
  cursor: pointer;
`

const ErrorText = styled.span`
  color: #c00000;
  text-align: center;
  font-family: Inter;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 0.94rem 0 0 0;
`

function StampAccess({ cafeName = '그린카페' }) {
  const [accessCode, setAccessCode] = useState('')
  const [isError, setIsError] = useState(false)
  const [showStampBg, setShowStampBg] = useState(false)
  const navigate = useNavigate()
  const code = '12345'

  const checkAccessCode = () => {
    if (accessCode === code) {
      setIsError(false)
      setShowStampBg(true)
    } else {
      setIsError(true)
    }
  }

  const handleAccessCode = (e) => {
    setAccessCode(e.target.value)
    if (isError) setIsError(false)
  }

  return (
    <>
      {showStampBg && <GetStamp />}
      <Header title='스탬프 적립하기' />
      <Container>
        <TopImage>
          <BgImg src={CafeImg} />
          <ImgEffect />
          <TextArea>
            <Title>
              <CafeName>{cafeName}</CafeName> 에서 <br /> 텀블러 테이크아웃할게요
            </Title>
            <Desc>
              음료 받을 때 직원에게 화면을 보여주고 <br />
              확인코드를 받으면 스탬프를 적립해요
            </Desc>
          </TextArea>
        </TopImage>
        <AccessCodeBox>
          <AccessCodeHeader>직원확인코드</AccessCodeHeader>
          <InputField>
            <CodeInput
              className={isError ? 'error' : ''}
              value={accessCode}
              placeholder='확인코드 입력'
              onChange={handleAccessCode}
            />
            <CompleteBtn onClick={checkAccessCode}>완료</CompleteBtn>
          </InputField>
          {isError && <ErrorText>올바르지 않은 확인코드입니다!</ErrorText>}
        </AccessCodeBox>
      </Container>
    </>
  )
}

export default StampAccess
