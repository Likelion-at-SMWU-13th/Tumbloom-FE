import React, { useState, useEffect } from 'react'
import api from '@/apis/api'
import CafeCoupon from './CafeCoupon'
import * as S from './styled'
import NoData from '../common/NoData'

const MyCoupon = () => {
  const [availableCouponList, setAvailableCouponList] = useState([])
  const [usableCount, setUsableCount] = useState(0)

  useEffect(() => {
    api.get(`/api/coupons/my`).then((res) => {
      console.log(res.data)
      setAvailableCouponList(res.data.items)
      setUsableCount(res.data.usableCount)
    })
  }, [])

  return (
    <S.MyCouponWrapper>
      <S.AvailableCouponBox>
        <S.AvailableCouponText>
          사용가능 쿠폰 <span style={{ fontWeight: '600' }}>{usableCount}개</span>
        </S.AvailableCouponText>
      </S.AvailableCouponBox>
      <S.CouponList>
        {availableCouponList.length ? (
          availableCouponList.map((item, i) => (
            <CafeCoupon
              id={item.couponId}
              key={i}
              cafeName={item.cafeName}
              price={'1000'}
              active={true}
              type={'use'}
              expiryDate={item.expiredDate}
              onClickExchange={{}}
            />
          ))
        ) : (
          <div style={{ marginTop: '12.25rem' }}>
            <NoData
              message={
                <>
                  아직 사용 가능한
                  <br />
                  쿠폰이 없습니다
                </>
              }
            />
          </div>
        )}
      </S.CouponList>
    </S.MyCouponWrapper>
  )
}

export default MyCoupon
