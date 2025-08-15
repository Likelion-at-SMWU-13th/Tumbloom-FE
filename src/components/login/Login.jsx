import React from 'react'
import styled from 'styled-components'
import Input from '@/components/common/Input'
import RegisterBtn from '@/components/Button/RegisterBtn'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginContainer = styled.div``

const LoginHeader = styled.h1``

const Desc = styled.p``

const GoToRegisterBtn = styled.span``

function Login() {
  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')

  const [btnColor, setBtnColor] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    setBtnColor(email.length > 0 && password.length > 0)
  }, [email, password])

  const handleLogin = () => {
    if (btnColor) {
      // 로그인 로직 추가할 예정
      navigate('/home')
    }
  }

  const goToRegister = () => {
    navigate('/home')
  }

  return (
    <LoginContainer>
      <LoginHeader>로그인</LoginHeader>
      <Input label='이메일' placeholder='이메일 입력' value={email} onChange={() => {}} />
      <Input label='비밀번호' placeholder='비밀번호 입력' onChange={() => {}} value={password} />
      <RegisterBtn btnName='로그인' onClick={() => {}} disabled={!btnColor} />
      <Desc>
        텀블러인 계정이 없나요?{' '}
        <GoToRegisterBtn onClick={goToRegister}>회원가입하기</GoToRegisterBtn>
      </Desc>
    </LoginContainer>
  )
}
export default Login
