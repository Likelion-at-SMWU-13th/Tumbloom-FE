import React from 'react'
import onboardingImg from '@/assets/images/onboarding1.svg'

function OnBoarding() {
  return (
    <>
      <div>
        <img src={onboardingImg} alt='Onboarding Logo' />
      </div>
      <div>
        <h1>텀블러인에 오신 당신을 환영합니다!</h1>
        <span>텀블러인은 모든 텀블러 유저를 위한, 텀블러 문화 활성화를 위한 서비스예요</span>
      </div>
      <div>
        <img />
      </div>
      <button>다음</button>
    </>
  )
}

export default OnBoarding
