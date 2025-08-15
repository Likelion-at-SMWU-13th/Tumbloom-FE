import React from 'react'
import styled from 'styled-components'
import RegisterBtn from '@/components/Button/RegisterBtn'
import Input from '@/components/common/Input'

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3.5rem 0 0 0;
`

const Header = styled.h1`
  color: #000;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

function SignUp() {
  return (
    <SignUpContainer>
      <Header>회원가입</Header>
      <Input label='닉네임' placeholder='닉네임 입력 (2~8자)' />
      <Input label='이메일' placeholder='이메일 입력' />
      <Input label='비밀번호' placeholder='비밀번호 입력 (8~20자)' />
      <RegisterBtn btnName='회원가입' />
    </SignUpContainer>
  )
}

export default SignUp
