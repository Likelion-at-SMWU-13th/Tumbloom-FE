import React from 'react'
import ProfileCard from './ProfileCard'
import * as S from './styled'

const ProfileShareBox = ({ stamp, userName }) => {
  return (
    <S.Wrapper>
      <ProfileCard stamp={stamp} userName={userName} />
      <S.ImgBtn>이미지 다운받기</S.ImgBtn>
    </S.Wrapper>
  )
}

export default ProfileShareBox
