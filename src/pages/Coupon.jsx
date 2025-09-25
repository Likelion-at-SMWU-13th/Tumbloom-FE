import React, { useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import CouponHeader from '@/components/Coupon/CouponHeader'
import Footer from '@/components/common/Footer'
import CouponChange from '@/components/Coupon/CouponChange'
import MyCoupon from '@/components/Coupon/MyCoupon'
import NoticeModal from '@/components/Coupon/NoticeModal'

const Coupon = () => {
  const location = useLocation()
  const [tab, setTab] = useState(location.state?.tab || 'exchange')
  const [openUseModal, setOpenUseModal] = useState(false)
  const [selectedCafe, setSelectedCafe] = useState(null)
  const baseURL = import.meta.env.VITE_API_BASE_URL
  const token = localStorage.getItem('accessToken')

  const handleOpenModal = ({ id, name }) => {
    setSelectedCafe({ id, name })
    setOpenUseModal(true)
  }

  const handleCancel = () => setOpenUseModal(false)

  const exchangeCoupon = (id) => {
    axios
      .post(
        `${baseURL}api/cafes/${id}/coupons`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      )
      .then((res) => {
        console.log(res)
        setTab('myCoupon')
      })
      .catch((err) => {
        console.log(err)
      })

    setOpenUseModal(false)
  }

  return (
    <>
      <NoticeModal
        cafeName={selectedCafe?.name ?? ''}
        onChangeBtnLeft={handleCancel}
        onChangeBtnRight={() => exchangeCoupon(selectedCafe?.id)}
        open={openUseModal}
      />
      <CouponHeader tab={tab} onChangeTab={setTab} />
      {tab === 'exchange' ? (
        <CouponChange onChangeTab={setTab} onOpenConfirm={handleOpenModal} />
      ) : (
        <MyCoupon />
      )}

      <Footer />
    </>
  )
}

export default Coupon
