import React, { useEffect } from 'react'
import styled from 'styled-components'
import RegisterBtn from '@/components/Button/RegisterBtn'
import Input from '@/components/common/Input'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
  const [nickname, setNickname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [btnColor, setBtnColor] = useState(false)
  const navigate = useNavigate()

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
    <SignUpContainer>
      <Header>회원가입</Header>
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
      <RegisterBtn btnName='회원가입' disabled={!btnColor} onClick={goToLogin} />
    </SignUpContainer>
  )
}

export default SignUp
