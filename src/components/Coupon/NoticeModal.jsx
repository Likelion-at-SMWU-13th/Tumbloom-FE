import React from 'react'
import * as S from './styled'
import warning from '@/assets/icons/warning.svg'
import { useNavigate } from 'react-router-dom'

const NoticeModal = ({ cafeName, onChangeBtnLeft, onChangeBtnRight, open }) => {
  const navigate = useNavigate()

  if (!open) return null

  return (
    <S.ModalBackground>
      <S.ModalWrapper>
        <S.ModalImage src={warning} />
        <S.TextContainer>
          <S.Title>{cafeName}</S.Title>
          <S.SubTilte>쿠폰을 교환하시겠어요?</S.SubTilte>
        </S.TextContainer>
        <S.BtnContainer>
          <S.Button
            style={{ color: '#005c4a', backgroundColor: '#deeeeb' }}
            onClick={() => onChangeBtnLeft()}
          >
            취소
          </S.Button>
          <S.Button
            style={{ color: '#fff', backgroundColor: '#25af94' }}
            onClick={onChangeBtnRight}
          >
            확인
          </S.Button>
        </S.BtnContainer>
      </S.ModalWrapper>
    </S.ModalBackground>
  )
}

export default NoticeModal
