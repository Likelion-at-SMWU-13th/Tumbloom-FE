import React, { useEffect } from 'react'
import RegisterBtn from '@/components/Button/RegisterBtn'
import Input from '@/components/common/Input'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './SignUp.Styled.js'
import axios from 'axios'

function SignUp() {
  const [nickname, setNickname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [btnColor, setBtnColor] = useState(false)
  const navigate = useNavigate()

  const handleSignUp = async () => {
    try {
      const response = await axios.post(
        `https://tumbloom.store/api/auth/signup`,
        {
          email,
          nickname,
          password,
        },
        { headers: { 'Content-Type': 'application/json' } },
      )

      console.log('회원가입 성공:', response.data)
      localStorage.setItem('accessToken', response.data.accessToken)
      goToLogin()
    } catch (error) {
      console.error('회원가입 실패:', error)
    }
  }

  const saveNickname = (e) => {
    setNickname(e.target.value)
  }

  const saveEmail = (e) => {
    setEmail(e.target.value)
  }

  const savePassword = (e) => {
    setPassword(e.target.value)
  }

  useEffect(() => {
    setBtnColor(nickname.length > 0 && email.length > 0 && password.length > 0)
  }, [nickname, email, password])

  const goToLogin = () => {
    if (btnColor) {
      navigate('/login')
    }
  }

  return (
    <S.SignUpContainer>
      <S.Header>회원가입</S.Header>
      <Input
        label='닉네임'
        placeholder='닉네임 입력 (2~8자)'
        value={nickname}
        onChange={saveNickname}
      />
      <Input label='이메일' placeholder='이메일 입력' value={email} onChange={saveEmail} />
      <Input
        label='비밀번호'
        placeholder='비밀번호 입력 (8~20자)'
        value={password}
        onChange={savePassword}
      />
      <RegisterBtn btnName='회원가입' disabled={!btnColor} onClick={handleSignUp} />
    </S.SignUpContainer>
  )
}

export default SignUp
