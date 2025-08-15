import React from 'react'
import * as S from '@/components/Home/styled'
import question from '@/assets/icons/question-gray.svg'

const TumblerInfo = () => {
  return (
    <S.InfoContainer>
      <S.InfoTitleBox>
        <S.InfoTitleIcon src={question} />
        <S.InfoTitle>나의 텀블러 소비가 어떤 효과가 있을까요?</S.InfoTitle>
      </S.InfoTitleBox>
      <S.InfoDescBox>
        <S.InfoDesc>
          텀블러를 1회 사용할 때마다 일회용컵 1개를 절약해요 <br />
        </S.InfoDesc>
        <S.InfoDesc>
          일회용컵 1개 공정에 사용되는 약 <S.HighlightText>0.55L의 물</S.HighlightText>과 <br />약{' '}
          <S.HighlightText>0.003그루의 나무</S.HighlightText>를 지킨 셈이에요
        </S.InfoDesc>
      </S.InfoDescBox>
    </S.InfoContainer>
  )
}

export default TumblerInfo
