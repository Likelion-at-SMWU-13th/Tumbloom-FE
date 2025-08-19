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
  open,
}) => {
  const isWarning = type === 'warning'

  if (!open) return null

  return (
    <S.ModalBackground>
      <S.ModalWrapper>
        <S.ModalImage src={isWarning ? warning : check} />
        <S.TextContainer>
          <S.Title>{title}</S.Title>
          <S.SubTilte>{subTitle}</S.SubTilte>
        </S.TextContainer>
        <S.BtnContainer>
          <S.Button
            style={{ color: '#005c4a', backgroundColor: '#deeeeb' }}
            onClick={() => onChangeBtnLeft()}
          >
            {btnLeft}
          </S.Button>
          <S.Button
            style={{ color: '#fff', backgroundColor: '#25af94' }}
            onClick={() => onChangeBtnRight()}
          >
            {btnRight}
          </S.Button>
        </S.BtnContainer>
      </S.ModalWrapper>
    </S.ModalBackground>
  )
}

export default NoticeModal
