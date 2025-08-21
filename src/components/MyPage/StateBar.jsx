import React from 'react'
import * as S from './styled'

const StateBar = ({ level, stepsLeft, tumblerCount }) => {
  const widthCalculate = (stamp, level) => {
    if (level === 1) return Number((22.0625 / 4).toFixed(2)) * stamp
    else if (level === 2) return Number((22.0625 / 5).toFixed(2)) * (stamp - 5)
    else if (level === 3) return Number((22.0625 / 9).toFixed(2)) * (stamp - 11)
    else if (level === 4) return Number((22.0625 / 19).toFixed(2)) * (stamp - 21)
    else if (level === 5) return 22.0625
  }

  const stateBarWidth = widthCalculate(tumblerCount, level)

  const nextLevelCount = (level) => {
    if (level === 1) return 2
    else if (level === 2) return 3
    else if (level === 3) return 4
    else if (level === 4) return 5
    else if (level === 5) return null
  }

  const nextLevel = nextLevelCount(level)

  return (
    <div>
      <S.StateBarContainer>
        <S.StateBar></S.StateBar>
        <S.CurrentStateBar style={{ width: `${stateBarWidth}rem` }}></S.CurrentStateBar>
      </S.StateBarContainer>
      <S.LevelTextContainer>
        <S.LevelState>{level === 5 ? 'Lv.4' : `Lv.${level}`}</S.LevelState>
        <S.NextLevel>
          {level === 5 ? '최고 레벨 도달' : `다음 레벨까지 ${stepsLeft}회 남음`}
        </S.NextLevel>
        <S.LevelState>{level === 5 ? 'Lv.5' : `Lv.${level + 1}`}</S.LevelState>
      </S.LevelTextContainer>
    </div>
  )
}

export default StateBar
