import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CafeCoupon from './CafeCoupon'
import * as S from './styled'
import NoData from '../common/NoData'

const MyCoupon = ({ coupon }) => {
  const [availableCouponList, setAvailableCouponList] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('accessToken')

    axios
      .get('https://tumbloom.store/api/coupons/my', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data)
        setAvailableCouponList(res.data.data.items)
      })
  })

  const AvailableCouponList = [
    { CafeName: '너드커피', DiscountPrice: '1000', count: '10', expiryDate: '2025.12.01' },
    { CafeName: '을의커피', DiscountPrice: '1500', count: '10', expiryDate: '2025.12.01' },
    { CafeName: '청파로움', DiscountPrice: '500', count: '20', expiryDate: '2025.12.01' },
    { CafeName: '청파맨션', DiscountPrice: '1000', count: '18', expiryDate: '2025.12.01' },
    { CafeName: '킷테', DiscountPrice: '500', count: '5', expiryDate: '2025.12.01' },
    { CafeName: '와플하우스', DiscountPrice: '1000', count: '20', expiryDate: '2025.12.01' },
    { CafeName: '마돈나커피', DiscountPrice: '1500', count: '3', expiryDate: '2025.12.01' },
    { CafeName: '쥬케로', DiscountPrice: '1000', count: '20', expiryDate: '2025.12.01' },
    { CafeName: '카페나리나무', DiscountPrice: '1300', count: '5', expiryDate: '2025.12.01' },
    { CafeName: '레드우드', DiscountPrice: '1000', count: '20', expiryDate: '2025.12.01' },
  ]

  return (
    <S.MyCouponWrapper>
      <S.AvailableCouponBox>
        <S.AvailableCouponText>
          사용가능 쿠폰 <span style={{ fontWeight: '600' }}>{availableCouponList.length}개</span>
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
