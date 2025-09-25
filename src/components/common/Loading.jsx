import React from 'react'
import * as S from './Loading.Styled'
import loading from '../../assets/icons/loading.gif'

const Loading = () => {
  return (
    <S.Wrapper>
      <S.LoadingImg src={loading} alt='로딩중' />
      <S.Text>잠시만 기다려주세요</S.Text>
    </S.Wrapper>
  )
}

export default Loading
