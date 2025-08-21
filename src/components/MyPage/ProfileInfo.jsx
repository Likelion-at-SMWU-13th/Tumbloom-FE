import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './styled'
import dotLine from '@/assets/images/dot-green-line.svg'
import arrow from '@/assets/icons/right-arrow.svg'
import check from '@/assets/icons/check-green.svg'
import MyPageBox from './MyPageBox'

const ProfileInfo = ({
  tumblerCount,
  issuedCoupons,
  availableCoupons,
  favoriteCafes,
  topPreferences,
}) => {
  const navigate = useNavigate()
  return (
    <S.ContentContainer>
      <S.CurrentCountBox>
        <S.TumblerCount>
          <S.Title>누적 텀블러 사용 횟수</S.Title>
          <S.Value>{tumblerCount}회</S.Value>
        </S.TumblerCount>
        <S.Line src={dotLine} />
        <S.CouponCount>
          <S.Title>누적 쿠폰 발급 횟수</S.Title>
          <S.Value>{issuedCoupons}회</S.Value>
        </S.CouponCount>
      </S.CurrentCountBox>
      <S.CafePreferenceBox>
        <S.PreferenceBox>
          <S.Title>내 카페 취향</S.Title>
          <S.Arrow src={arrow} />
        </S.PreferenceBox>
        <S.PreferenceValueBox>
          <S.TextBox>
            <S.Check src={check} />
            <S.PreferenceValue>감성/분위기</S.PreferenceValue>
          </S.TextBox>
          <S.TextBox>
            <S.Check src={check} />
            <S.PreferenceValue>고급/스페셜티</S.PreferenceValue>
          </S.TextBox>
          <S.TextBox>
            <S.Check src={check} />
            <S.PreferenceValue>디저트 맛집</S.PreferenceValue>
          </S.TextBox>
        </S.PreferenceValueBox>
      </S.CafePreferenceBox>
      <S.CouponCafeBox>
        <MyPageBox
          type={'coupon'}
          title={'사용가능 쿠폰'}
          value={availableCoupons}
          onClick={() => navigate('/coupon')}
        />
        <MyPageBox
          type={'bookmark'}
          title={'즐겨찾는 카페'}
          value={favoriteCafes}
          onClick={() => navigate('/favoriteCafe')}
        />
      </S.CouponCafeBox>
    </S.ContentContainer>
  )
}

export default ProfileInfo
