import React, { useState } from 'react'
import CouponHeader from '@/components/Coupon/CouponHeader'
import Footer from '@/components/common/Footer'
import CouponChange from '@/components/Coupon/CouponChange'
import MyCoupon from '@/components/Coupon/MyCoupon'

const Coupon = () => {
  const [tab, setTab] = useState('exchange')

  return (
    <>
      <CouponHeader tab={tab} onChangeTab={setTab} />
      {tab === 'exchange' ? <CouponChange stamp={'3'} /> : <MyCoupon />}

      <Footer />
    </>
  )
}

export default Coupon
