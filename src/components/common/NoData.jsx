import React from 'react'
import messageIcon from '@/assets/icons/message.svg'
import * as S from './NoData.Styled'

const NoData = ({ message }) => {
  return (
    <S.Wrapper>
      <S.MessageIcon src={messageIcon} />
      <S.NoDataMessage>{message}</S.NoDataMessage>
    </S.Wrapper>
  )
}

export default NoData
