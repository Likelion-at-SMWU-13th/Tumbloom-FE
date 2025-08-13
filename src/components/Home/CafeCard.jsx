import React from 'react'
import * as S from './styled'
import bookmark from '@/assets/icons/bookmark.svg'
import clicked_bookmark from '@/assets/icons/clicked-bookmark.svg'

const CafeCard = ({ cafeName, cafeAddress, cafeImg }) => {
  return (
    <S.CafeCardWrapper>
      <S.CafeCardImg style={{ backgroundImage: `url(${cafeImg})` }}>
        <S.BookMark src={bookmark} />
      </S.CafeCardImg>
      <S.CafeCardInfo>
        <S.CafeName>{cafeName}</S.CafeName>
        <S.CafeAddress>{cafeAddress}</S.CafeAddress>
      </S.CafeCardInfo>
    </S.CafeCardWrapper>
  )
}

export default CafeCard
