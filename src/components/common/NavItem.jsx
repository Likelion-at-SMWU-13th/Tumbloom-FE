import React from 'react'
import * as S from './NavItem.Styled.js'

function NavItem({ label, icon, clickedIcon, active = false, onClick }) {
  return (
    <S.Item>
      <S.ItemBtn onClick={onClick} aria-pressed={active}>
        <S.NavIcon src={active ? clickedIcon : icon} />
        <S.NavName style={{ color: active ? '#000' : '#ababab' }}>{label}</S.NavName>
      </S.ItemBtn>
    </S.Item>
  )
}

export default NavItem
