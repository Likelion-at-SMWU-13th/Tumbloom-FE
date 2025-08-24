import React from 'react'
import visibleIcon from '@/assets/icons/pwd-visible.svg'
import invisibleIcon from '@/assets/icons/pwd-invisible.svg'
import { useState } from 'react'
import * as S from './PwdInputField.Styled.js'

function PwdInputField({ label, placeholder, value, onChange, type = 'text' }) {
  const [isVisible, setIsVisible] = useState(false)

  const handleIconClick = () => {
    setIsVisible(!isVisible)
  }

  return (
    <S.InputContainer>
      <S.Label>{label}</S.Label>
      <S.InputField>
        <S.InputBox
          type={isVisible ? 'text' : 'password'}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <S.EyeIcon src={isVisible ? visibleIcon : invisibleIcon} onClick={handleIconClick} />
      </S.InputField>
    </S.InputContainer>
  )
}

export default PwdInputField
