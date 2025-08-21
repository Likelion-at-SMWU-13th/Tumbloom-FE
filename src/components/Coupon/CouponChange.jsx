import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as S from './styled'
import { InputBox } from '../common/Input.Styled'
import CafeInputField from './CafeInputField'
import CafeCoupon from './CafeCoupon'

const CouponChange = () => {
  const [couponList, setCouponList] = useState([])
  const [currentCount, setCurrentCount] = useState(0)
  const [availableCoupon, setAvailableCoupon] = useState(0)

  const exchangeCoupon = (id) => {
    const token = localStorage.getItem('accessToken')

    axios
      .post(
        `https://tumbloom.store/api/cafes/${id}/coupons`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      )
      .then((res) => {
        console.log(res)
        alert('쿠폰 교환이 완료되었습니다')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    const token = localStorage.getItem('accessToken')

    axios
      .get('https://tumbloom.store/api/coupons', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data)
        setCouponList(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    const token = localStorage.getItem('accessToken')

    axios
      .get('https://tumbloom.store/api/users/me/home', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data)
        setCurrentCount(res.data.data.stampStatus.currentCount)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    const token = localStorage.getItem('accessToken')

    axios
      .get('https://tumbloom.store/api/users/me/mypage', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data)
        setAvailableCoupon(res.data.data.availableCoupons)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const moreCoupon = 8 - currentCount

  return (
    <S.Wrapper>
      <S.SearchArea>
        <S.ChangeTextBox>
          {currentCount >= 8 ? (
            <S.CurrentChangeText>
              지금까지 스탬프를 <S.HighlightText>{currentCount}개</S.HighlightText> 모았어요 <br />{' '}
              이제 쿠폰 <S.HighlightText>{availableCoupon}장</S.HighlightText>으로 교환할 수 있어요
            </S.CurrentChangeText>
          ) : (
            <S.CurrentChangeText>
              지금까지 스탬프를 <S.HighlightText>{currentCount}개</S.HighlightText> 모았어요 <br />{' '}
              쿠폰 교환까지 <S.HighlightText>{moreCoupon}개</S.HighlightText> 남았어요
            </S.CurrentChangeText>
          )}
        </S.ChangeTextBox>
        <CafeInputField />
      </S.SearchArea>
      <S.NearCouponText>
        지금 근처 <S.HighlightText>청파동</S.HighlightText> 카페 쿠폰
      </S.NearCouponText>
      <S.CouponList>
        {couponList
          .filter(({ remainingQuantity }) => Number(remainingQuantity) > 0)
          .map(({ cafeId, cafeName, remainingQuantity }) => (
            <CafeCoupon
              id={cafeId}
              key={cafeId}
              cafeName={cafeName}
              price={'1000'}
              count={remainingQuantity}
              type={'exchange'}
              active={currentCount >= 8}
              onClickExchange={exchangeCoupon}
            />
          ))}
      </S.CouponList>
    </S.Wrapper>
  )
}

export default CouponChange
