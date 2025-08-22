import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '@/components/common/Header'
import FavoriteCafeList from '@/components/FavoriteCafeList/FavoriteCafeList'

const FavoriteCafe = () => {
  const navigate = useNavigate()

  return (
    <>
      <Header title={'즐겨찾는 카페'} onLeftClick={() => navigate(-1)} />
      <FavoriteCafeList />
    </>
  )
}

export default FavoriteCafe
