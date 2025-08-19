import React from 'react'
import * as S from './styled'

const Button = ({ icon, title }) => {
  return (
    <S.BtnWrapper>
      <S.BtnIcon src={icon} />
      <S.BtnTitle>{title}</S.BtnTitle>
    </S.BtnWrapper>
  )
}

export default Button
