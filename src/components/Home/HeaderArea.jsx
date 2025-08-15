import React from 'react'
import * as S from './styled'
import MatrixBar from './MatrixBar'

const HeaderArea = ({ userName, stamp }) => {
  return (
    <S.Wrapper>
      <S.GreetingWrapper>
        <S.UserName>{userName}님,</S.UserName>
        <S.WelcomeText>오늘도 반가워요!</S.WelcomeText>
      </S.GreetingWrapper>
      <div>
        <MatrixBar stamp_count={stamp} />
      </div>
    </S.Wrapper>
  )
}

export default HeaderArea
