import React from 'react'
import * as S from './styled'

const MatrixChip = ({ icon, label, value }) => {
  return (
    <S.MatrixChip>
      <S.IconBox>
        <S.Icons src={icon} alt={label} />
      </S.IconBox>
      <S.Label>{label}</S.Label>
      <S.Value>{value}</S.Value>
    </S.MatrixChip>
  )
}

export default MatrixChip
