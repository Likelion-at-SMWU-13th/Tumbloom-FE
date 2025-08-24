import React from 'react'
import { useState } from 'react'
import * as S from './styled'
import star_icon from '../../assets/icons/star_icon.svg'
import star_gray_icon from '../../assets/icons/star_gray_icon.svg'
import TapBtn from './TapBtn'

const FilterTap = ({ value = 0, onChangeTab }) => {
  return (
    <S.TapWrapper>
      <TapBtn
        text={'가까운 내 주변'}
        icon={''}
        active={value === 0}
        onClick={() => onChangeTab(0)}
        activeIcon={''}
        inactiveIcon={''}
      />
      <TapBtn
        text={'취향저격 AI 추천'}
        icon={star_icon}
        active={value === 1}
        onClick={() => onChangeTab(1)}
        activeIcon={star_icon}
        inactiveIcon={star_gray_icon}
      />
    </S.TapWrapper>
  )
}

export default FilterTap
