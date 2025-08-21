import React, { useState, useEffect } from 'react'
import * as S from './styled'
import MatrixChip from './MatrixChip'
import tumbler_icon from '../../assets/icons/tumbler_icon.svg'
import cup_icon from '../../assets/icons/cup_icon.svg'
import tree_icon from '../../assets/icons/tree_icon.svg'
import info_icon from '../../assets/icons/question_icon.svg'
import TumblerInfo from './TumblerInfo'

const MatrixBar = ({ tumblerCount, savedWater, savedTree }) => {
  const [openInfo, setOpenInfo] = useState(false)

  return (
    <S.MatrixContainer>
      <S.MatrixBar>
        <MatrixChip icon={tumbler_icon} label='텀블러 사용' value={tumblerCount} />
        <MatrixChip icon={cup_icon} label='아낀 물' value={savedWater} />
        <MatrixChip icon={tree_icon} label='지킨 나무' value={savedTree} />
      </S.MatrixBar>
      <S.Info src={info_icon} alt='info' onClick={() => setOpenInfo(true)} />
      <TumblerInfo open={openInfo} onClose={() => setOpenInfo(false)} />
    </S.MatrixContainer>
  )
}

export default MatrixBar
