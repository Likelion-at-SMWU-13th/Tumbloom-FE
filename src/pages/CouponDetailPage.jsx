import React, { use, useState } from 'react'
import NoticeModal from '@/components/common/NoticeModal'
import Header from '@/components/common/Header'
import CouponUse from '@/components/CouponUse/CouponUse'

const CouponDetailPage = () => {
  const [openUseModal, setOpenUseModal] = useState(false)
  const [activeCoupon, setActiveCoupon] = useState(true)

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
          setActiveCoupon(false)
          setOpenUseModal(false)
        }}
        open={openUseModal}
      />
      <Header title={'쿠폰 사용하기'} />
      <CouponUse onUseClick={() => setOpenUseModal(true)} active={activeCoupon} />
    </>
  )
}

export default CouponDetailPage
