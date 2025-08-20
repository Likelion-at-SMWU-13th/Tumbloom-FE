import React, { useState } from 'react'
import Footer from '@/components/common/Footer'
import ProfileContent from '@/components/MyPage/ProfileContent'
import ProfileInfo from '@/components/MyPage/ProfileInfo'
import LevelModal from '@/components/MyPage/LevelModal'

const MyPage = () => {
  const [info, setInfo] = useState(false)

  const stamp = 10
  const usedCoupon = 2
  const availableCoupon = 3
  const favoriteCafe = 2

  const levelCalculate = (stamp) => {
    if (stamp <= 4) return 1
    else if (stamp >= 5 && stamp <= 10) return 2
    else if (stamp >= 11 && stamp <= 20) return 3
    else if (stamp >= 21 && stamp <= 40) return 4
    else if (stamp >= 41) return 5
  }

  const currentLevel = levelCalculate(stamp)

  return (
    <div style={{ backgroundColor: '#F6FCFB' }}>
      <ProfileContent onChangeInfo={setInfo} stamp={stamp} level={currentLevel} />
      <ProfileInfo
        stamp={stamp}
        usedCoupon={usedCoupon}
        availableCoupon={availableCoupon}
        favoriteCafe={favoriteCafe}
      />
      <Footer />
      {info && <LevelModal onChangeInfo={setInfo} />}
    </div>
  )
}

export default MyPage
