import React from 'react'
import * as S from './styled'
import { InputBox } from '../common/Input.Styled'
import CafeInputField from './CafeInputField'

const CouponChange = () => {
  return (
    <div>
      <S.SearchArea style={{ border: 'solid 1px #000' }}>
        <S.ChangeTextBox>
          <S.ChangeText>
            지금까지 스탬프를 <S.HighlightText>8개</S.HighlightText> 모았어요 <br /> 이제 쿠폰{' '}
            <S.HighlightText>1장</S.HighlightText>으로 교환할 수 있어요
          </S.ChangeText>
        </S.ChangeTextBox>
        <CafeInputField />
      </S.SearchArea>
      <div></div>
    </div>
  )
}

export default CouponChange
