import React from 'react'
import * as S from './styled'
import { InputBox } from '../common/Input.Styled'
import CafeInputField from './CafeInputField'
import CafeCoupon from './CafeCoupon'

const CouponChange = ({ stamp }) => {
  const CafeCouponList = [
    { CafeName: '너드커피', DiscountPrice: '1000', count: '0' },
    { CafeName: '을의커피', DiscountPrice: '1500', count: '0' },
    { CafeName: '청파로움', DiscountPrice: '500', count: '20' },
    { CafeName: '청파맨션', DiscountPrice: '1000', count: '18' },
    { CafeName: '킷테', DiscountPrice: '500', count: '5' },
    { CafeName: '와플하우스', DiscountPrice: '1000', count: '20' },
    { CafeName: '마돈나커피', DiscountPrice: '1500', count: '3' },
    { CafeName: '쥬케로', DiscountPrice: '1000', count: '20' },
    { CafeName: '카페나리나무', DiscountPrice: '1300', count: '0' },
    { CafeName: '레드우드', DiscountPrice: '1000', count: '20' },
  ]

  const collectStamp = Number(stamp)
  const avaliableCoupon = Math.floor(collectStamp / 8)

  return (
    <div>
      <S.SearchArea>
        <S.ChangeTextBox>
          <S.CurrentChangeText>
            지금까지 스탬프를 <S.HighlightText>{collectStamp}개</S.HighlightText> 모았어요 <br />{' '}
            이제 쿠폰 <S.HighlightText>{avaliableCoupon}장</S.HighlightText>으로 교환할 수 있어요
          </S.CurrentChangeText>
        </S.ChangeTextBox>
        <CafeInputField />
      </S.SearchArea>
      <S.NearCouponText>
        지금 근처 <S.HighlightText>청파동</S.HighlightText> 카페 쿠폰
      </S.NearCouponText>
      <S.CouponList>
        {CafeCouponList.filter(({ count }) => Number(count) > 0).map(
          ({ CafeName, DiscountPrice, count }) => (
            <CafeCoupon key={CafeName} cafeName={CafeName} price={DiscountPrice} count={count} />
          ),
        )}
      </S.CouponList>
    </div>
  )
}

export default CouponChange
