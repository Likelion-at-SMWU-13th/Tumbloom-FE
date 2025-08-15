import React from 'react'
import styled from 'styled-components'

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Label = styled.label`
  align-self: stretch;
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
const InputBox = styled.input`
  width: 20.875rem;
  height: 3.1875rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  background: #efefef;
`

function Input(label, placeholder) {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <InputBox type='text' placeholder={placeholder}></InputBox>
    </InputContainer>
  )
}

export default Input
