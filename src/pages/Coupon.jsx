import React from 'react'
import CouponHeader from '@/components/Coupon/CouponHeader'
import Footer from '@/components/common/Footer'
import CouponChange from '@/components/Coupon/CouponChange'

const Coupon = () => {
  return (
    <>
      <CouponHeader />
      <CouponChange stamp={'16'} />
      <Footer />
    </>
  )
}

export default Coupon
