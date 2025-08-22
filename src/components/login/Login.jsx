import React from 'react'
import styled from 'styled-components'
import Input from '@/components/common/Input'
import RegisterBtn from '@/components/Button/RegisterBtn'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import visibleIcon from '@/assets/icons/pwd-visible.svg'
import invisibleIcon from '@/assets/icons/pwd-invisible.svg'
import PwdInputField from '@/components/common/PwdInputField'
import axios from 'axios'

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

const LoginErrorText = styled.span`
  color: #f54d4dff;
  text-align: center;
  font-family: Inter;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 0.94rem 0 0 0;
`

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [btnColor, setBtnColor] = useState(false)
  const [error, setError] = useState('')

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

      navigate('/home')
    }
  }

  const onLoginHandler = async () => {
    try {
      setError('')
      const response = await axios.post(
        `https://tumbloom.store/api/auth/login`,
        { email, password },
        { headers: { 'Content-Type': 'application/json' } },
      )

      console.log('login response.data =', response.data)

      const accessToken = response.data?.accessToken ?? response.data?.data?.accessToken
      const refreshToken = response.data?.refreshToken ?? response.data?.data?.refreshToken
      if (!accessToken) {
        throw new Error('로그인 토큰이 없습니다.')
      }

      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('refreshToken', refreshToken)

      setEmail('')
      setPassword('')
      handleLogin()
    } catch (error) {
      const status = error.response?.status
      if (status === 404) {
        setError('등록되지 않은 이메일입니다.')
      } else if (status === 401) {
        setError('비밀번호가 일치하지 않습니다.')
      } else {
        setError('로그인에 실패했습니다. 다시 시도하세요')
      }
    }
  }

  const goToRegister = () => {
    navigate('/signup')
  }

  return (
    <>
      <LoginContainer>
        <LoginHeader>로그인</LoginHeader>
        <Input label='이메일' placeholder='이메일 입력' value={email} onChange={handleEmail} />
        <PwdInputField
          label='비밀번호'
          placeholder='비밀번호 입력'
          onChange={handlePassword}
          value={password}
          type='password'
        />
        <RegisterBtn btnName='로그인' onClick={onLoginHandler} disabled={!btnColor} />
        <Desc>
          텀블러인 계정이 없나요?{' '}
          <GoToRegisterBtn onClick={goToRegister}>회원가입하기</GoToRegisterBtn>
        </Desc>
        {error && <LoginErrorText>{error}</LoginErrorText>}
      </LoginContainer>
    </>
  )
}

export default Login
