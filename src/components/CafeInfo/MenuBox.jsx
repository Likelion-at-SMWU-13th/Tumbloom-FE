import React from 'react'
import * as S from './CafeInfo.Styled.js'
import line from '@/assets/icons/menu-line.svg'

function MenuBox({ cafe }) {
  const items = Array.isArray(cafe?.menuList) ? cafe.menuList : []
  if (!items.length) return null
  return (
    <S.MenuWrapper>
      {items.map((m, i) => (
        <S.MenuRow key={m.id ?? `${m.menuName}-${m.price}-${i}`}>
          <S.MenuName>{m.menuName}</S.MenuName>
          <S.Line src={line} />
          <S.MenuPrice>{m.price.toLocaleString()}원</S.MenuPrice>
        </S.MenuRow>
      ))}
    </S.MenuWrapper>
  )
}

export default MenuBox
