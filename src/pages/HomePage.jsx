import React from 'react'
import HeaderArea from '@/components/Home/HeaderArea'
// import MatrixBar from '@/components/Home/MatrixBar'
import StampArea from '@/components/Home/StampArea'
import CafeRecommend from '@/components/Home/CafeRecommend'
import Footer from '@/components/common/Footer'

const HomePage = () => {
  return (
    <>
      <HeaderArea />
      <StampArea />
      <CafeRecommend />
      <Footer />
    </>
  )
}

export default HomePage
