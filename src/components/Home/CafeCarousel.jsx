import React from 'react'
import * as S from './styled'
import FilterTap from './FilterTap'
import CafeCard from './CafeCard'
import PaginationDots from './PaginationDots'

const CafeCarousel = () => {
  return (
    <>
      <FilterTap />
      <CafeCard />
      <PaginationDots />
    </>
  )
}

export default CafeCarousel
