import React from 'react'
import styled from 'styled-components'
import Input from '@/components/common/Input'
import RegisterBtn from '@/components/Button/RegisterBtn'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import visibleIcon from '@/assets/icons/pwd-visible.svg'
import invisibleIcon from '@/assets/icons/pwd-invisible.svg'
import PwdInputField from '@/components/common/PwdInputField'
import api from '@/apis/api'
import * as S from '@/components/Login/Login.Styled.js'

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
      const response = await api.post(`/api/auth/login`, { email, password })

      const accessToken = response.data?.accessToken ?? response.data?.data?.accessToken
      if (!accessToken) {
        throw new Error('로그인 토큰이 없습니다.')
      }

      localStorage.setItem('accessToken', accessToken)

      setEmail('')
      setPassword('')
      handleLogin()
    } catch (error) {
      const status = error.response?.status
      if (status === 404) {
        setError('등록되지 않은 이메일입니다')
      } else if (status === 401) {
        setError('비밀번호가 일치하지 않습니다')
      } else {
        setError('로그인에 실패했습니다')
      }
    }
  }

  return (
    <>
      <S.LoginContainer>
        <S.LoginHeader>로그인</S.LoginHeader>
        <Input label='이메일' placeholder='이메일 입력' value={email} onChange={handleEmail} />
        <PwdInputField
          label='비밀번호'
          placeholder='비밀번호 입력'
          onChange={handlePassword}
          value={password}
          type='password'
        />
        {error && <S.LoginErrorText>{error}</S.LoginErrorText>}
        <RegisterBtn btnName='로그인' onClick={onLoginHandler} disabled={!btnColor} />
        <S.Desc>
          텀블러인 계정이 없나요?{' '}
          <S.GoToRegisterBtn onClick={() => navigate(`/signup`)}>회원가입하기</S.GoToRegisterBtn>
        </S.Desc>
      </S.LoginContainer>
    </>
  )
}

export default Login
