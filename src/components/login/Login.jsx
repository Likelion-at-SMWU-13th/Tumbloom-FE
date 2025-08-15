import React from 'react'
import styled from 'styled-components'
import Input from '@/components/common/Input'
import RegisterBtn from '@/components/Button/RegisterBtn'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import visibleIcon from '@/assets/icons/pwd-visible.svg'
import invisibleIcon from '@/assets/icons/pwd-invisible.svg'
import PwdInput from '../common/pwdInput'

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3.5rem 0 0 0;
`

const LoginHeader = styled.h1`
  color: #000;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

const Desc = styled.p`
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 1.38rem 0 0 0;
`

const GoToRegisterBtn = styled.span`
  color: #25af94;
  font-family: 'Pretendard Variable';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: auto;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
  cursor: pointer;
`

function Login() {
  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')

  const [btnColor, setBtnColor] = useState(false)

  const navigate = useNavigate()

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  useEffect(() => {
    setBtnColor(email.length > 0 && password.length > 0)
  }, [email, password])

  const handleLogin = () => {
    if (btnColor) {
      // 로그인 로직 추가할 예정
      navigate('/')
    }
  }

  const goToRegister = () => {
    navigate('/signup')
  }

  return (
    <LoginContainer>
      <LoginHeader>로그인</LoginHeader>
      <Input label='이메일' placeholder='이메일 입력' value={email} onChange={handleEmail} />
      <PwdInput
        label='비밀번호'
        placeholder='비밀번호 입력'
        onChange={handlePassword}
        value={password}
        type='password'
      />
      <RegisterBtn btnName='로그인' onClick={handleLogin} disabled={!btnColor} />
      <Desc>
        텀블러인 계정이 없나요?{' '}
        <GoToRegisterBtn onClick={goToRegister}>회원가입하기</GoToRegisterBtn>
      </Desc>
    </LoginContainer>
  )
}
export default Login
