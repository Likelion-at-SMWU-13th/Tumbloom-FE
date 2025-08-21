import lightGreenSprout from '@/assets/icons/light-green-sprout.svg'
import darkGreenSprout from '@/assets/icons/dark-green-sprout.svg'
import graySprout from '@/assets/icons/gray-sprout.svg'
import React from 'react'
import styled from 'styled-components'

const Sprout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  width: 2.32069rem;
  height: 2.09263rem;
  transform: rotate(1.851deg);
  flex-shrink: 0;
`

const SproutIcon = styled.img`
  width: 2.32069rem;
  height: 2.09263rem;
  transform: rotate(1.851deg);
  flex-shrink: 0;
  border: 1px solid blue;
  position: relative;
`

const CafeName = styled.span`
  width: 4.375rem;
  color: #000;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  position: absolute;
  top: 1.1rem;
`

function CafeSprout() {
  const cafeName = '모모카페'
  return (
    <>
      <Sprout>
        <SproutIcon src={darkGreenSprout} />
        <CafeName>{cafeName}</CafeName>
      </Sprout>
    </>
  )
}

export default CafeSprout
