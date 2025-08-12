import React from 'react'
import * as S from './styled'
import MatrixChip from './MatrixChip'
import tumbler_icon from '../../assets/icons/tumbler_icon.svg'
import cup_icon from '../../assets/icons/cup_icon.svg'
import tree_icon from '../../assets/icons/tree_icon.svg'

const MatrixBar = () => {
  return (
    <div>
      <MatrixChip icon={tumbler_icon} label='텀블러 사용' value='01' unit='회' />
      <MatrixChip icon={cup_icon} label='아낀 물' value='0.55' unit='L' />
      <MatrixChip icon={tumbler_icon} label='지킨 나무' value='0.003' unit='그루' />
    </div>
  )
}

export default MatrixBar
