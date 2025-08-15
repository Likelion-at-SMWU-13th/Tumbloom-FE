import React from 'react'
import HeaderArea from '@/components/Home/HeaderArea'
// import MatrixBar from '@/components/Home/MatrixBar'
import StampArea from '@/components/Home/StampArea'
import CafeRecommend from '@/components/Home/CafeRecommend'
import Footer from '@/components/common/Footer'

const HomePage = () => {
  const name = '텀블러91'
  const stamp_c = 16
  return (
    <>
      <HeaderArea userName={name} stamp={stamp_c} />
      <StampArea stamp={stamp_c} />
      <CafeRecommend />
      <Footer />
    </>
  )
}

export default HomePage
