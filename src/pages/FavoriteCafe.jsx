import React from 'react'
import Header from '@/components/common/Header'
import FavoriteCafeList from '@/components/FavoriteCafeList/FavoriteCafeList'

const FavoriteCafe = () => {
  return (
    <>
      <Header title={'즐겨찾는 카페'} />
      <FavoriteCafeList />
    </>
  )
}

export default FavoriteCafe
