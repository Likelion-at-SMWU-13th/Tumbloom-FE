import React from 'react'
import styled from 'styled-components'
import splachImg from '@/assets/images/splash-logo.svg'

const SplashContainer = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  background-color: #25af94;
  width: 24.5625rem;
  height: 53.25rem;
`
const Logo = styled.img`
  width: 13.875rem;
  height: 6.48938rem;
  flex-shrink: 0;
`

function Splash() {
  return (
    <SplashContainer>
      <Logo src={splachImg} alt='Splash Logo' />
    </SplashContainer>
  )
}

export default Splash
