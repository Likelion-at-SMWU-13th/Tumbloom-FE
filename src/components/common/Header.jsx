import React from 'react'
import backBtn from '../../assets/icons/back-btn.svg'
import * as S from './Header.Styled.js'
function Header({ title }) {
  return (
    <S.HeaderBox>
      <S.LeftArea>
        <S.BackBtn src={backBtn}></S.BackBtn>
      </S.LeftArea>
      <S.TitleArea>{title}</S.TitleArea>
      <S.RightArea></S.RightArea>
    </S.HeaderBox>
  )
}

export default Header
