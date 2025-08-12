import React from 'react'
import * as S from './styled'
import MatrixChip from './MatrixChip'
import tumbler_icon from '../../assets/icons/tumbler_icon.svg'
import cup_icon from '../../assets/icons/cup_icon.svg'
import tree_icon from '../../assets/icons/tree_icon.svg'
import info_icon from '../../assets/icons/question_icon.svg'

const MatrixBar = () => {
  return (
    <S.MatrixContainer>
      <S.MatrixBar>
        <MatrixChip icon={tumbler_icon} label='텀블러 사용' value='01' unit='회' />
        <MatrixChip icon={cup_icon} label='아낀 물' value='0.55' unit='L' />
        <MatrixChip icon={tree_icon} label='지킨 나무' value='0.003' unit='그루' />
      </S.MatrixBar>
      <img src={info_icon} alt='info' />
    </S.MatrixContainer>
  )
}

export default MatrixBar
