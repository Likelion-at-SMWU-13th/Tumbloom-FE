import React from 'react'
import * as S from './NoticeModal.Styled'
import warning from '@/assets/icons/warning.svg'
import check from '@/assets/icons/check.svg'

const NoticeModal = ({
  type,
  title,
  subTitle,
  btnLeft,
  btnRight,
  onChangeBtnLeft,
  onChangeBtnRight,
}) => {
  const isWarning = type === 'warning'

  return (
    <S.ModalBackground>
      <S.ModalWrapper>
        <S.ModalImage src={isWarning ? warning : check} />
        <S.TextContainer>
          <S.Title>{title}</S.Title>
          <S.SubTilte>{subTitle}</S.SubTilte>
        </S.TextContainer>
        <S.BtnContainer>
          <S.Button style={{ color: '#005c4a', backgroundColor: '#deeeeb' }}>{btnLeft}</S.Button>
          <S.Button style={{ color: '#fff', backgroundColor: '#25af94' }}>{btnRight}</S.Button>
        </S.BtnContainer>
      </S.ModalWrapper>
    </S.ModalBackground>
  )
}

export default NoticeModal
