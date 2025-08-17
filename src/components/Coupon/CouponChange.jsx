import React from 'react'
import * as S from './styled'
import { InputBox } from '../common/Input.Styled'
import CafeInputField from './CafeInputField'
import CafeCoupon from './CafeCoupon'

const CouponChange = () => {
  return (
    <div>
      <S.SearchArea style={{ border: 'solid 1px #000' }}>
        <S.ChangeTextBox>
          <S.CurrentChangeText>
            지금까지 스탬프를 <S.HighlightText>8개</S.HighlightText> 모았어요 <br /> 이제 쿠폰{' '}
            <S.HighlightText>1장</S.HighlightText>으로 교환할 수 있어요
          </S.CurrentChangeText>
        </S.ChangeTextBox>
        <CafeInputField />
      </S.SearchArea>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <CafeCoupon cafeName={'그린카페'} price={'1000'} count={'20'} />
      </div>
    </div>
  )
}

export default CouponChange
