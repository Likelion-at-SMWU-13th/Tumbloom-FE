import React from 'react'
import * as S from './styled'

const CouponHeader = ({ tab, onChangeTab }) => {
  return (
    <S.HeaderContainer>
      <S.CouponChangeTap
        onClick={() => onChangeTab('exchange')}
        style={{
          borderBottom: tab === 'exchange' ? 'solid 0.1875rem #000' : 'none',
        }}
      >
        <S.TapText style={{ color: tab === 'exchange' ? '#000' : '#ababab' }}>교환하기</S.TapText>
      </S.CouponChangeTap>
      <S.MyCouponTap
        onClick={() => onChangeTab('myCoupon')}
        style={{ borderBottom: tab === 'myCoupon' ? 'solid 0.1875rem #000' : 'none' }}
      >
        <S.TapText style={{ color: tab === 'myCoupon' ? '#000' : '#ababab' }}>내 쿠폰</S.TapText>
      </S.MyCouponTap>
    </S.HeaderContainer>
  )
}

export default CouponHeader
