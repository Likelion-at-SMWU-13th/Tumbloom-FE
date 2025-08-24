import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import CouponHeader from '@/components/Coupon/CouponHeader'
import Footer from '@/components/common/Footer'
import CouponChange from '@/components/Coupon/CouponChange'
import MyCoupon from '@/components/Coupon/MyCoupon'

const Coupon = () => {
  const location = useLocation()
  const [tab, setTab] = useState(location.state?.tab || 'exchange')

  return (
    <>
      <CouponHeader tab={tab} onChangeTab={setTab} />
      {tab === 'exchange' ? <CouponChange /> : <MyCoupon />}

      <Footer />
    </>
  )
}

export default Coupon
