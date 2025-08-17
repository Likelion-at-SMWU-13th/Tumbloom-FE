import React from 'react'
import CafeImg from '@/assets/images/get-stamp-cafe.png'
import Header from '@/components/common/Header'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GetStamp from '@/components/getStamp/GetStamp'
import * as S from '@/components/getStamp/StampAccess.Styled'

function StampAccess({ cafeName = '그린카페' }) {
  const [accessCode, setAccessCode] = useState('')
  const [isError, setIsError] = useState(false)
  const [showStampBg, setShowStampBg] = useState(false)
  const navigate = useNavigate()
  const code = '12345'

  const checkAccessCode = () => {
    if (accessCode === code) {
      setIsError(false)
      setShowStampBg(true)
      // 백엔드에 스탬프 적립 POST
    } else {
      setIsError(true)
    }
  }

  const handleAccessCode = (e) => {
    setAccessCode(e.target.value)
    if (isError) setIsError(false)
  }

  return (
    <>
      {showStampBg && <GetStamp />}
      <Header title='스탬프 적립하기' />
      <S.Container>
        <S.TopImage>
          <S.BgImg src={CafeImg} />
          <S.ImgEffect />
          <S.TextArea>
            <S.Title>
              <S.CafeName>{cafeName}</S.CafeName> 에서 <br /> 텀블러 테이크아웃할게요
            </S.Title>
            <S.Desc>
              음료 받을 때 직원에게 화면을 보여주고 <br />
              확인코드를 받으면 스탬프를 적립해요
            </S.Desc>
          </S.TextArea>
          g
        </S.TopImage>
        <S.AccessCodeBox>
          <S.AccessCodeHeader>직원확인코드</S.AccessCodeHeader>
          <S.InputField>
            <S.CodeInput
              className={isError ? 'error' : ''}
              value={accessCode}
              placeholder='확인코드 입력'
              onChange={handleAccessCode}
            />
            <S.CompleteBtn onClick={checkAccessCode}>완료</S.CompleteBtn>
          </S.InputField>
          {isError && <S.ErrorText>올바르지 않은 확인코드입니다!</S.ErrorText>}
        </S.AccessCodeBox>
      </S.Container>
    </>
  )
}

export default StampAccess
