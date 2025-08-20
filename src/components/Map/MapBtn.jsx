import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
  display: inline-flex;
  height: 2.375rem;
  padding: 0 0.9375rem;
  align-items: center;
  gap: 0.4375rem;
  flex-shrink: 0;
  border-radius: 18.75rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.15);
  border: none;
  cursor: pointer;
`

const BtnImg = styled.img`
  aspect-ratio: 1/1;
`

const BtnText = styled.span`
  color: #000;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

function MapBtn({ img, name, onClick, isActive }) {
  return (
    <Btn
      onClick={onClick}
      style={{
        backgroundColor: isActive ? '#25AF94' : '#fff',
      }}
    >
      <BtnImg src={img} />
      <BtnText style={{ color: isActive ? '#fff' : '#000' }}>{name}</BtnText>
    </Btn>
  )
}

export default MapBtn
