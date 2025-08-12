import React from 'react'
import * as S from './styled'
import MatrixBar from './MatrixBar'

const HeaderArea = () => {
  return (
    <S.Wrapper>
      <S.GreetingWrapper>
        <S.UserName>텀블러91님,</S.UserName>
        <S.WelcomeText>오늘도 반가워요!</S.WelcomeText>
      </S.GreetingWrapper>
      <div>
        <MatrixBar />
      </div>
    </S.Wrapper>
  )
}

export default HeaderArea
