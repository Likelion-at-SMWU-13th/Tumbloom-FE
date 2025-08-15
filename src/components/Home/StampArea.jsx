import React from 'react'
import * as S from './styled'
import stamp_card from '../../assets/images/stampcard_img.svg'
import StampComplete from './StampComplete'
import Stamp from '@/assets/images/stamp_img.svg'

const StampArea = ({ stamp }) => {
  const n = Math.max(0, Math.floor(Number(stamp) || 0))
  const count = n === 0 ? 0 : ((n - 1) % 8) + 1

  const stampsArr = Array.from({ length: count })

  const StampPosition = [
    { x: 33, y: 33 },
    { x: 109.5, y: 33 },
    { x: 186, y: 33 },
    { x: 262.5, y: 33 },
    { x: 302, y: 94 },
    { x: 225.5, y: 94 },
    { x: 149, y: 94 },
    { x: 73, y: 94 },
  ]
  return (
    <S.StampArea>
      <S.MyStamp>
        내 텀블러 스탬프 (<S.HighlightText>{stamp}</S.HighlightText>/8)
      </S.MyStamp>
      <S.StampBox>
        <S.StampCard src={stamp_card} alt='stamp_card' />
        <S.Stamps>
          {stampsArr.map((_, i) => (
            <img
              key={i}
              src={Stamp}
              style={{
                position: 'absolute',
                left: `${StampPosition[i].x}px`,
                top: `${StampPosition[i].y}px`,
                transform: 'translate(-50%, -50%)',
              }}
            />
          ))}
        </S.Stamps>
      </S.StampBox>
    </S.StampArea>
  )
}

export default StampArea
