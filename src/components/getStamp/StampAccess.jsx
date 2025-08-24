import React from 'react'
import axios from 'axios'
import Header from '@/components/common/Header'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import GetStamp from '@/components/getStamp/GetStamp'
import * as S from '@/components/getStamp/StampAccess.Styled'

function StampAccess() {
  const [accessCode, setAccessCode] = useState('')
  const [isError, setIsError] = useState(false)
  const [showStampBg, setShowStampBg] = useState(false)
  const location = useLocation()
  const cafeId = location.state?.cafeId ?? null
  const cafeName = location.state?.cafeName || ''
  const cafeImg = location.state?.cafeImg || ''
  const navigate = useNavigate()

  const handleCompleteBtn = () => {
    if (!cafeId || !accessCode) {
      setIsError(true)
      return
    }

    const at = localStorage.getItem('accessToken')
    if (!at || at === 'undefined') {
      setIsError(true)
      return
    }

    axios
      .post(
        `https://tumbloom.store/api/cafes/${cafeId}/verification-code/verify`,
        { code: accessCode },
        { headers: { Authorization: `Bearer ${at}` } },
      )
      .then(({ data }) => {
        if (data?.data?.valid === true) {
          setIsError(false)
          setShowStampBg(true)
        } else {
          setIsError(true)
        }
      })
      .catch((err) => {
        const status = err.response?.status
        const msg = err.response?.data?.message

        if (status === 400) {
          console.error(msg)
        } else if (status === 404) {
          console.error(msg)
        } else {
          console.error('기타 오류', { status, msg })
        }
        setIsError(true)
      })
  }

  const handleAccessCode = (e) => {
    setAccessCode(e.target.value)
    if (isError) setIsError(false)
  }

  const goToPrev = () => {
    navigate(-1)
  }

  return (
    <>
      {showStampBg && <GetStamp />}
      <Header title='스탬프 적립하기' onLeftClick={goToPrev} />
      <S.Container>
        <S.TopImage>
          <S.BgImg src={cafeImg} />
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
            <S.CompleteBtn onClick={handleCompleteBtn}>완료</S.CompleteBtn>
          </S.InputField>
          {isError && <S.ErrorText>올바르지 않은 확인코드입니다!</S.ErrorText>}
        </S.AccessCodeBox>
      </S.Container>
    </>
  )
}
export default StampAccess
