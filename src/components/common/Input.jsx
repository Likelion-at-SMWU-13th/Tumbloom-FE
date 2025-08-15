import React from 'react'
import styled from 'styled-components'

function Input(props) {
  return (
    <div>
      <span>닉네임</span>
      <input type='text' placeholder='닉네임 입력 (2~8자)'></input>
    </div>
  )
}

export default Input
