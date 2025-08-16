import React from 'react'
import styled from 'styled-components'

const ImgContainer = styled.div``
const Text = styled.h1``
const BtnContainer = styled.div``
const GoHomeBtn = styled.button``
const GoCouponBtn = styled.button``

function GetStamp(props) {
  return (
    <div>
      <ImgContainer></ImgContainer>
      <Text></Text>
      <BtnContainer>
        <GoHomeBtn></GoHomeBtn>
        <GoCouponBtn></GoCouponBtn>
      </BtnContainer>
    </div>
  )
}

export default GetStamp
