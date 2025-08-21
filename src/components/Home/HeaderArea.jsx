import React from 'react'
import * as S from './styled'
import MatrixBar from './MatrixBar'

const HeaderArea = ({ userName, tumblerCount, savedWater, savedTree }) => {
  return (
    <S.Wrapper>
      <S.GreetingWrapper>
        <S.UserName>{userName}님,</S.UserName>
        <S.WelcomeText>오늘도 반가워요!</S.WelcomeText>
      </S.GreetingWrapper>
      <div>
        <MatrixBar tumblerCount={tumblerCount} savedWater={savedWater} savedTree={savedTree} />
      </div>
    </S.Wrapper>
  )
}

export default HeaderArea
