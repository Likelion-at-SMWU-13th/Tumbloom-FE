import React from 'react'
import * as S from './styled'
import question from '@/assets/icons/question-green.svg'
import lv1 from '@/assets/images/lv1-profile.svg'

const ProfileContent = () => {
  return (
    <S.ProfileContentBox>
      <S.ProfileImg src={lv1} />
      <S.ProfileName>닉네임91</S.ProfileName>
      <S.ProfileLevelBox>
        <S.ProfileLevel>Lv.1 텀블러 뉴비</S.ProfileLevel>
        <S.QuestionIcon src={question} />
      </S.ProfileLevelBox>
      <div>
        <S.StateBarContainer>
          <S.StateBar></S.StateBar>
          <S.CurrentStateBar></S.CurrentStateBar>
        </S.StateBarContainer>
        <S.LevelTextContainer>
          <S.LevelState>Lv.1</S.LevelState>
          <S.NextLevel>다음 레벨까지 4회 남음</S.NextLevel>
          <S.LevelState>Lv.2</S.LevelState>
        </S.LevelTextContainer>
      </div>
    </S.ProfileContentBox>
  )
}

export default ProfileContent
