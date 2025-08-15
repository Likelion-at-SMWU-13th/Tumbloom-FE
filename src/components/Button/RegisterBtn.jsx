import React from 'react'
import * as S from './RegisterBtn.Styled.js'

function RegisterBtn({ btnName, onClick, disabled }) {
  return (
    <S.BtnContainer>
      <S.Button type='button' onClick={onClick} disabled={disabled}>
        {btnName}
      </S.Button>
    </S.BtnContainer>
  )
}

export default RegisterBtn
