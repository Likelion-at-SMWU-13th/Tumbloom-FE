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

  const preferenceLabels = {
    EMOTIONAL_ATMOSPHERE: '감성/분위기',
    STUDY_WORKSPACE: '공부/작업공간',
    CHAT_MEETING: '수다/모임',
    HOT_PLACE: 'HOT플레이스',
    EVENT: '이벤트/행사',
    SPECIALTY: '고급/스페셜티',
    DESSERT: '디저트/케익',
    DECAF: '디카페인',
    SEASON_MENU: '빙수/계절메뉴',
    BRUNCH: '브런치/식사',
    FRANCHISE: '브랜드/프랜차이즈',
    PET_FRIENDLY: '반려동물 가능',
    OUTDOOR_TERRACE: '야외/테라스',
    ECO_LOCAL: '친환경/로컬',
    UNIQUE_THEME: '이색테마/메뉴',
  }

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
      <S.CafePreferenceBox onClick={() => navigate('/preference')}>
        <S.PreferenceBox>
          <S.Title>내 카페 취향</S.Title>
          <S.Arrow src={arrow} />
        </S.PreferenceBox>
        <S.PreferenceValueBox>
          {topPreferences.length > 0 ? (
            topPreferences.map((item, i) => (
              <S.TextBox key={i}>
                <S.Check src={check} />
                <S.PreferenceValue>{preferenceLabels[item]}</S.PreferenceValue>
              </S.TextBox>
            ))
          ) : (
            <S.TextBox>
              <S.NoPreference>선택된 취향이 없어요</S.NoPreference>
            </S.TextBox>
          )}
        </S.PreferenceValueBox>
      </S.CafePreferenceBox>
      <S.CouponCafeBox>
        <MyPageBox
          type={'coupon'}
          title={'사용가능 쿠폰'}
          value={availableCoupons}
          onClick={() => navigate('/coupon', { state: { tab: 'myCoupon' } })}
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
