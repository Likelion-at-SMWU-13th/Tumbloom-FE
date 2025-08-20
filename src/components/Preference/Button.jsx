import React from 'react'
import * as S from './styled'

const Button = ({ icon, title, active, onClick }) => {
  return (
    <S.BtnWrapper
      style={{ border: active ? '1.093px solid #25AF94' : '1.093px solid #ababab' }}
      onClick={onClick}
    >
      <S.BtnIcon src={icon} />
      <S.BtnTitle style={{ color: active ? '#25AF94' : '#ababab' }}>{title}</S.BtnTitle>
    </S.BtnWrapper>
  )
}

export default Button
