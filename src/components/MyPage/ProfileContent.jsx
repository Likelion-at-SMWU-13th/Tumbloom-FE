import React from 'react'
import * as S from './styled'
import question from '@/assets/icons/question-green.svg'
import lv1_img from '@/assets/images/lv1-profile.svg'
import lv2_img from '@/assets/images/lv2-profile.svg'
import lv3_img from '@/assets/images/lv3-profile.svg'
import lv4_img from '@/assets/images/lv4-profile.svg'
import lv5_img from '@/assets/images/lv5-profile.svg'
import share from '@/assets/icons/profile-share.svg'

const ProfileContent = ({ onChangeInfo, stamp }) => {
  const lv1 = stamp <= 4
  const lv2 = stamp >= 5 && stamp <= 10
  const lv3 = stamp >= 11 && stamp <= 20
  const lv4 = stamp >= 21 && stamp <= 40
  const lv5 = stamp >= 41

  return (
    <S.ProfileContentBox>
      <S.ProfileShareBox>
        <S.Share src={share} />
        <S.ShareText>프로필 공유</S.ShareText>
      </S.ProfileShareBox>
      <S.ProfileImg src={lv1_img} />
      <S.ProfileName>닉네임91</S.ProfileName>
      <S.ProfileLevelBox>
        <S.ProfileLevel>Lv.1 텀블러 뉴비</S.ProfileLevel>
        <S.QuestionIcon src={question} onClick={() => onChangeInfo(true)} />
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
