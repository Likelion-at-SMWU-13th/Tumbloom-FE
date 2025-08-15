import React from 'react'
import styled from 'styled-components'
import visibleIcon from '@/assets/icons/pwd-visible.svg'
import invisibleIcon from '@/assets/icons/pwd-invisible.svg'
import { useState } from 'react'

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const InputField = styled.div`
  display: flex;
  flex-direction: row;
`

const Label = styled.label`
  align-self: stretch;
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 0.62rem 0 0.44rem 0;
`
const InputBox = styled.input`
  width: 20.875rem;
  height: 3.1875rem;
  flex-shrink: 0;
  padding-left: 1.25rem;
  font-size: 1rem;
  border-radius: 0.625rem;
  background: #efefef;
  border: none;

  &::placeholder {
    color: #828282;
    font-family: 'Pretendard Variable';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`

const EyeIcon = styled.img`
  position: absolute;
`

function PwdInput({ label, placeholder, value, onChange, type = 'text' }) {
  const [isVisible, setIsVisible] = useState(false)

  const handleIconClick = () => {
    setIsVisible(!isVisible)
  }

  return (
    <InputContainer>
      <Label>{label}</Label>
      <InputField>
        <InputBox
          type={isVisible ? 'text' : 'password'}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <EyeIcon src={isVisible ? visibleIcon : invisibleIcon} onClick={handleIconClick} />
      </InputField>
    </InputContainer>
  )
}

export default PwdInput
