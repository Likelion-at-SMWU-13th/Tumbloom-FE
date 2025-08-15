import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  display: flex;
  width: 20.75rem;
  height: 3.5rem;
  padding: 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  border-radius: 1.875rem;
  border: 1.2px solid #25af94;
  background: #fff;
`

function RegisterBtn() {
  return (
    <>
      <Button>회원가입</Button>
    </>
  )
}

export default RegisterBtn
