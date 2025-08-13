import React from 'react'
import * as S from './styled'
import FilterTap from './FilterTap'
import CafeCard from './CafeCard'
import PaginationDots from './PaginationDots'
import cafeImg from '@/assets/images/cafe-img.png'

const CafeCarousel = () => {
  return (
    <>
      <FilterTap />
      <S.CafeCarousel>
        <CafeCard cafeName={'모모카페'} cafeAddress={'서울 용산구 청파동2가'} cafeImg={cafeImg} />
        <PaginationDots />
      </S.CafeCarousel>
    </>
  )
}

export default CafeCarousel
