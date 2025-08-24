import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './styled'
import StateBar from './StateBar'
import question from '@/assets/icons/question-green.svg'
import lv1_img from '@/assets/images/lv1-profile.svg'
import lv2_img from '@/assets/images/lv2-profile.svg'
import lv3_img from '@/assets/images/lv3-profile.svg'
import lv4_img from '@/assets/images/lv4-profile.svg'
import lv5_img from '@/assets/images/lv5-profile.svg'
import share from '@/assets/icons/profile-share.svg'

const ProfileContent = ({ onChangeInfo, nickName, level, stepsLeft, tumblerCount }) => {
  const navigate = useNavigate()

  const currentLevel = (level) => {
    if (level === 1) return 'Lv.1 텀블러 뉴비'
    else if (level === 2) return 'Lv.2 텀블러 입문자'
    else if (level === 3) return 'Lv.3 텀블러 러버'
    else if (level === 4) return 'Lv.4 텀블러 고수'
    else if (level === 5) return 'Lv.5 텀블러 히어로'
  }

  const levelName = currentLevel(level)

  return (
    <S.ProfileContentBox>
      <S.ProfileShareBox>
        <S.Share src={share} onClick={() => navigate('/profileShare')} />
        <S.ShareText>프로필 공유</S.ShareText>
      </S.ProfileShareBox>
      {level === 1 && <S.ProfileImg src={lv1_img} />}
      {level === 2 && <S.ProfileImg src={lv2_img} />}
      {level === 3 && <S.ProfileImg src={lv3_img} />}
      {level === 4 && <S.ProfileImg src={lv4_img} />}
      {level === 5 && <S.ProfileImg src={lv5_img} />}
      <S.ProfileName>{nickName}</S.ProfileName>
      <S.ProfileLevelBox>
        <S.ProfileLevel>{levelName}</S.ProfileLevel>
        <S.QuestionIcon src={question} onClick={() => onChangeInfo(true)} />
      </S.ProfileLevelBox>
      <div>
        <StateBar level={level} stepsLeft={stepsLeft} tumblerCount={tumblerCount} />
      </div>
    </S.ProfileContentBox>
  )
}

export default ProfileContent
