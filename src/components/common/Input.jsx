import React from 'react'
import * as S from './Input.Styled.js'

function Input({ label, placeholder, value, onChange, type = 'text' }) {
  return (
    <S.InputContainer>
      <S.Label>{label}</S.Label>
      <S.InputBox
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></S.InputBox>
    </S.InputContainer>
  )
}

export default Input
