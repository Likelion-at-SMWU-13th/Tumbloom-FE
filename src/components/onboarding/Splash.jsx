import React from 'react'
import splachImg from '@/assets/images/splash-logo.svg'
import * as S from './Splash.Styled.js'

function Splash() {
  return (
    <S.SplashContainer>
      <S.Logo src={splachImg} alt='Splash Logo' />
    </S.SplashContainer>
  )
}

export default Splash
