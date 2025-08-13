import React from 'react'
import { useState } from 'react'
import * as S from './styled'
import star_icon from '../../assets/icons/star_icon.svg'

const FilterTap = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <S.TapWrapper>
      <S.TapBtn active={activeTab === 0} onClick={() => setActiveTab(0)}>
        가까운 내 주변
      </S.TapBtn>
      <S.TapBtn active={activeTab === 1} onClick={() => setActiveTab(1)}>
        취향저격 AI 추천 <img src={star_icon} />
      </S.TapBtn>
    </S.TapWrapper>
  )
}

export default FilterTap
