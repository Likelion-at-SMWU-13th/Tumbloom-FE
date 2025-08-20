import React from 'react'
import * as S from './styled'
import lv1_img from '@/assets/images/lv1-profile.svg'
import lv2_img from '@/assets/images/lv2-profile.svg'
import lv3_img from '@/assets/images/lv3-profile.svg'
import lv4_img from '@/assets/images/lv4-profile.svg'
import lv5_img from '@/assets/images/lv5-profile.svg'

import MatrixChip from '../Home/MatrixChip'
import tumbler_icon from '../../assets/icons/tumbler_icon.svg'
import cup_icon from '../../assets/icons/cup_icon.svg'
import tree_icon from '../../assets/icons/tree_icon.svg'

const ProfileCard = ({ stamp, userName }) => {
  const s = Number(stamp)
  const water = (s * 0.55).toFixed(2)
  const tree = (s * 0.003).toFixed(3)

  const levelCalculate = (stamp) => {
    if (stamp <= 4) return 1
    else if (stamp >= 5 && stamp <= 10) return 2
    else if (stamp >= 11 && stamp <= 20) return 3
    else if (stamp >= 21 && stamp <= 40) return 4
    else if (stamp >= 41) return 5
  }

  const currentLevelName = (level) => {
    if (level === 1) return 'Lv.1 텀블러 뉴비'
    else if (level === 2) return 'Lv.2 텀블러 입문자'
    else if (level === 3) return 'Lv.3 텀블러 러버'
    else if (level === 4) return 'Lv.4 텀블러 고수'
    else if (level === 5) return 'Lv.5 텀블러 히어로'
  }

  const userLevel = levelCalculate(stamp)

  const userLevelName = currentLevelName(userLevel)

  return (
    <S.ProfileCardWrapper>
      <S.ProfileInfoBox>
        {userLevel === 1 && <S.ProfileImg src={lv1_img} />}
        {userLevel === 2 && <S.ProfileImg src={lv2_img} />}
        {userLevel === 3 && <S.ProfileImg src={lv3_img} />}
        {userLevel === 4 && <S.ProfileImg src={lv4_img} />}
        {userLevel === 5 && <S.ProfileImg src={lv5_img} />}
        <S.NickName>{userName}</S.NickName>
        <S.LevelContainer>
          <S.LevelName>{userLevelName}</S.LevelName>
        </S.LevelContainer>
      </S.ProfileInfoBox>
      <S.MatrixContainer>
        <MatrixChip icon={tumbler_icon} label='텀블러 사용' value={s} unit='회' />
        <MatrixChip icon={cup_icon} label='아낀 물' value={water} unit='L' />
        <MatrixChip icon={tree_icon} label='지킨 나무' value={tree} unit='그루' />
      </S.MatrixContainer>
    </S.ProfileCardWrapper>
  )
}

export default ProfileCard
