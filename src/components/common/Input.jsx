import React from 'react'
import * as S from './Input.Styled.js'

function Input({ label, placeholder, value, onChange }) {
  return (
    <S.InputContainer>
      <S.Label>{label}</S.Label>
      <S.InputBox
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></S.InputBox>
    </S.InputContainer>
  )
}

export default Input
