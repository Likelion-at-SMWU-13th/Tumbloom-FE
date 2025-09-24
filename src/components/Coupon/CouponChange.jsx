import React, { useState, useEffect } from 'react'
import api from '@/apis/api'
import * as S from './styled'
import { InputBox } from '../common/Input.Styled'
import CafeInputField from './CafeInputField'
import CafeCoupon from './CafeCoupon'
import NoData from '../common/NoData'

const CouponChange = ({ onChangeTab }) => {
  const lat = localStorage.getItem('lat')
  const lng = localStorage.getItem('lng')
  const [couponList, setCouponList] = useState([])
  const [currentCount, setCurrentCount] = useState(0)
  const [query, setQuery] = useState('')
  const [searched, setSearched] = useState(false)
  const [submittedQuery, setSubmittedQuery] = useState('')

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const kw = query.trim()
      if (kw) {
        setSearched(true)
        fetchCoupon(kw)
        setSubmittedQuery(kw)
      } else {
        setSearched(false)
        setSubmittedQuery('')
        fetchCoupon('')
      }
    }
  }

  const exchangeCoupon = (id) => {
    api
      .post(`/api/cafes/${id}/coupons`)
      .then((res) => {
        console.log(res)
        alert('쿠폰 교환이 완료되었습니다')
        onChangeTab('myCoupon')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const fetchCoupon = (keyword = '') => {
    const params = { lat, lng, ...(keyword.trim() && { cafeName: keyword.trim() }) }
    return api
      .get(`/api/coupons`, {
        params,
      })
      .then((res) => {
        console.log(res.data)
        setCouponList(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    fetchCoupon('')
  }, [])

  useEffect(() => {
    api
      .get(`/api/users/me/home`)
      .then((res) => {
        console.log(res.data)
        setCurrentCount(res.data.data.stampStatus.validStampCnt)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const moreCoupon = 8 - currentCount
  const availableCoupon = Math.floor(currentCount / 8)

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
      </S.SearchArea>
      <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '2.44rem' }}>
        <CafeInputField
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <S.NearCouponText>
        {searched && submittedQuery ? (
          <>
            <S.HighlightText>{submittedQuery}</S.HighlightText> 쿠폰 검색결과
          </>
        ) : (
          '지금 내 주변 카페 쿠폰'
        )}
      </S.NearCouponText>
      {couponList.length === 0 ? (
        searched ? (
          <div style={{ marginTop: '12.25rem' }}>
            <NoData
              message={
                <>
                  검색어와 일치하는
                  <br />
                  쿠폰이 없습니다
                </>
              }
            />
          </div>
        ) : (
          <div style={{ marginTop: '12.25rem' }}>
            <NoData
              message={
                <>
                  주변 카페
                  <br />
                  쿠폰이 없습니다
                </>
              }
            />
          </div>
        )
      ) : (
        <S.CouponList>
          {couponList
            .filter(({ availableCount }) => Number(availableCount) > 0)
            .map(({ cafeId, cafeName, availableCount, discountPrice }) => (
              <CafeCoupon
                id={cafeId}
                key={cafeId}
                cafeName={cafeName}
                price={discountPrice}
                count={availableCount}
                type={'exchange'}
                active={currentCount >= 8}
                onClickExchange={exchangeCoupon}
              />
            ))}
        </S.CouponList>
      )}
    </S.Wrapper>
  )
}

export default CouponChange
