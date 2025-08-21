import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Footer from '@/components/common/Footer'
import ProfileContent from '@/components/MyPage/ProfileContent'
import ProfileInfo from '@/components/MyPage/ProfileInfo'
import LevelModal from '@/components/MyPage/LevelModal'
import { NickName } from '@/components/ProfileShare/styled'

const MyPage = () => {
  const [info, setInfo] = useState(false)

  const [userName, setUserName] = useState('')
  const [level, setLevel] = useState(0)
  const [tumblerCount, setTumblerCount] = useState(0)
  const [issuedCoupons, setIssuedCoupons] = useState(0)
  const [availableCoupons, setAvailableCoupons] = useState(0)
  const [favoriteCafes, setFavoriteCafes] = useState(0)
  const [topPreferences, setTopPreferences] = useState([])
  const [stepsLeft, setStepsLeft] = useState(0)

  useEffect(() => {
    const token = localStorage.getItem('accessToken')

    axios
      .get('https://tumbloom.store/api/users/me/mypage', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUserName(res.data.data.nickname)
        setLevel(res.data.data.level)
        setTumblerCount(res.data.data.tumblerCount)
        setIssuedCoupons(res.data.data.issuedCoupons)
        setAvailableCoupons(res.data.data.availableCoupons)
        setFavoriteCafes(res.data.data.favoriteCafes)
        setTopPreferences(res.data.data.topPreferences)
        setStepsLeft(res.data.data.stepsLeft)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

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
      <ProfileContent
        onChangeInfo={setInfo}
        nickName={userName}
        level={level}
        stepsLeft={stepsLeft}
        tumblerCount={tumblerCount}
      />
      <ProfileInfo
        tumblerCount={tumblerCount}
        issuedCoupons={issuedCoupons}
        availableCoupons={availableCoupons}
        favoriteCafes={favoriteCafes}
        topPreferences={topPreferences}
      />
      <Footer />
      {info && <LevelModal onChangeInfo={setInfo} />}
    </div>
  )
}

export default MyPage
