import React from 'react'
import * as S from './styled'

const MatrixChip = ({ icon, label, value, unit }) => {
  return (
    <div>
      <img src={icon} alt={label} />
      <h3>{label}</h3>
      <h2>
        {value} {unit}
      </h2>
    </div>
  )
}

export default MatrixChip
