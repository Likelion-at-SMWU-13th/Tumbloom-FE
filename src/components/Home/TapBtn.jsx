import React from 'react'
import * as S from './styled'

const TapBtn = ({ text, icon, active, onClick, activeIcon, inactiveIcon }) => {
  return (
    <S.TapButton
      onClick={onClick}
      style={{
        color: active ? '#000' : '#767676',
        backgroundColor: active ? '#fff' : '#efefef',
        border: active ? '1px solid #cecece' : 'none',
      }}
    >
      {text} {icon && <S.StarIcon src={active ? activeIcon : inactiveIcon} alt='' />}
    </S.TapButton>
  )
}

export default TapBtn
