import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import NoticeModal from '@/components/common/NoticeModal'
import Header from '@/components/common/Header'
import CouponUse from '@/components/CouponUse/CouponUse'

const CouponDetailPage = () => {
  const baseURL = import.meta.env.VITE_API_BASE_URL
  const navigate = useNavigate()
  const [openUseModal, setOpenUseModal] = useState(false)
  const [activeCoupon, setActiveCoupon] = useState(true)

  const [cafeName, setCafeName] = useState('')
  const [expiredDate, setExpiredDate] = useState('')
  const [price, setPrice] = useState('')
  const [cafeImg, setCafeImg] = useState(null)

  const params = useParams()
  const id = params.couponId
  const couponId = id ?? null

  useEffect(() => {
    const token = localStorage.getItem('accessToken')

    axios
      .get(`${baseURL}api/coupons/my/${couponId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data)
        setCafeName(res.data.cafeName)
        setExpiredDate(res.data.expiredDate)
        setPrice(res.data.content)
        setCafeImg(res.data.imageUrl)
      })
      .catch((err) => {
        console.log(err)
      })
  })

  const couponUse = () => {
    const token = localStorage.getItem('accessToken')

    axios
      .delete(`${baseURL}api/coupons/my/${couponId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <NoticeModal
        type={'warning'}
        title={'쿠폰 사용을 완료하셨나요?'}
        subTitle={'사용하기 버튼을 누른 뒤에는 복구할 수 없어요'}
        btnLeft={'취소'}
        btnRight={'확인'}
        onChangeBtnLeft={() => setOpenUseModal(false)}
        onChangeBtnRight={() => {
          couponUse()
          setActiveCoupon(false)
          setOpenUseModal(false)
        }}
        open={openUseModal}
      />
      <Header title={'쿠폰 사용하기'} />
      <CouponUse
        onUseClick={() => setOpenUseModal(true)}
        active={activeCoupon}
        cafeName={cafeName}
        expiredDate={expiredDate}
        price={price}
        cafeImg={cafeImg}
      />
    </>
  )
}

export default CouponDetailPage
