import React from 'react'
import styled from 'styled-components'
import line from '@/assets/icons/menu-line.svg'

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.3rem;
  height: 100%;
  padding-top: 1.25rem;
  box-sizing: border-box;
`

const MenuRow = styled.div`
  display: grid;
  grid-template-columns: 8.5rem 3.9rem 3.9rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-left: 1.56rem;
  box-sizing: border-box;
  padding-right: 4.94rem;
`

const MenuName = styled.span`
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const Line = styled.img`
  width: 4.375rem;
  height: 0.0625rem;
`

const MenuPrice = styled.span`
  display: flex;
  justify-content: flex-end;
  padding-right: 0.4rem;
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

function MenuBox() {
  const MenuList = [
    { name: '아메리카노', price: '4500원' },
    { name: '카페라떼', price: '4500원' },
    { name: '바닐라라떼', price: '4500원' },
    { name: '녹차라떼', price: '4500원' },
    { name: '연유라떼', price: '4500원' },
    { name: '카페모카', price: '4500원' },
    { name: '콜드브루', price: '4500원' },
    { name: '바닐라크림콜드브루', price: '4500원' },
  ]

  return (
    <MenuWrapper>
      {MenuList.map((item, i) => (
        <MenuRow key={i}>
          <MenuName>{item.name}</MenuName>
          <Line src={line} />
          <MenuPrice>{item.price}</MenuPrice>
        </MenuRow>
      ))}
    </MenuWrapper>
  )
}

export default MenuBox
