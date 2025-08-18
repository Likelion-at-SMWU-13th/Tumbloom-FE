import React from 'react'
import splachImg from '@/assets/images/splash-logo.svg'
import * as S from './Splash.Styled.js'
import { useNavigate } from 'react-router-dom'

function Splash() {
  const navigate = useNavigate()

  setTimeout(() => {
    navigate('/onb')
  }, 5000)

  return (
    <S.SplashContainer>
      <S.Logo src={splachImg} alt='Splash Logo' />
    </S.SplashContainer>
  )
}

export default Splash
