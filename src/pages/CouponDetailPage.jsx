import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '@/apis/api'
import NoticeModal from '@/components/common/NoticeModal'
import CouponPrev from '@/components/Coupon/CouponPrev'
import CouponUse from '@/components/CouponUse/CouponUse'

const CouponDetailPage = () => {
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
    api
      .get(`/api/coupons/my/${couponId}`)
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
    api
      .delete(`/api/coupons/my/${couponId}`)
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
      <CouponPrev
        title='쿠폰 사용하기'
        onLeftClick={() => navigate('/coupon', { state: { tab: 'myCoupon' } })}
      />
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
