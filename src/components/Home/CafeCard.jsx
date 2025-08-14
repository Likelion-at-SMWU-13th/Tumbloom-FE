import React, { useState } from 'react'
import * as S from './styled'
import bookmark from '@/assets/icons/bookmark.svg'
import clicked_bookmark from '@/assets/icons/clicked-bookmark.svg'

const CafeCard = ({ cafeName, cafeAddress, cafeImg }) => {
  const [active, setActive] = useState(false)

  return (
    <S.CafeCardWrapper>
      <S.CafeCardImg style={{ backgroundImage: `url(${cafeImg})` }}>
        <S.BookMark
          onClick={() => setActive((prev) => !prev)}
          src={active ? clicked_bookmark : bookmark}
        />
      </S.CafeCardImg>
      <S.CafeCardInfo>
        <S.CafeName>{cafeName}</S.CafeName>
        <S.CafeAddress>{cafeAddress}</S.CafeAddress>
      </S.CafeCardInfo>
    </S.CafeCardWrapper>
  )
}

export default CafeCard
