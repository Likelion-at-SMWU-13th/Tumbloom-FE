import React from 'react'
import backBtn from '../../assets/icons/back-btn.svg'
import { useLocation, useNavigate } from 'react-router-dom'
import * as S from './Header.Styled.js'

function Header({ title }) {
  const navigate = useNavigate()
  const location = useLocation()
  const hasPrevPage = location.key !== 'default'
  const handleClick = () => {
    if (hasPrevPage) {
      navigate(-1)
    } else {
      navigate(`/home`)
    }
  }

  return (
    <S.HeaderBox>
      <S.LeftArea>
        <S.BackBtn src={backBtn} onClick={handleClick}></S.BackBtn>
      </S.LeftArea>
      <S.TitleArea>{title}</S.TitleArea>
      <S.RightArea></S.RightArea>
    </S.HeaderBox>
  )
}
export default Header
