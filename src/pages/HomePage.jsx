import React, { useState, useEffect } from 'react'
import axios from 'axios'
import HeaderArea from '@/components/Home/HeaderArea'
import StampArea from '@/components/Home/StampArea'
import CafeRecommend from '@/components/Home/CafeRecommend'
import Footer from '@/components/common/Footer'

const HomePage = () => {
  const [userName, setuserName] = useState('')
  const [tumblerCount, setTumblerCount] = useState('')
  const [savedWater, setSavedWater] = useState('')
  const [savedTree, setSavedTree] = useState('')
  const [currentCount, setCurrentCount] = useState(0)
  const [exchangeable, setExchangeable] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('accessToken')

    axios
      .get('https://tumbloom.store/api/users/me/home', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data)
        setuserName(res.data.data.welcomeStatus.nickname)
        setTumblerCount(res.data.data.welcomeStatus.tumblerCount)
        setSavedWater(res.data.data.welcomeStatus.savedWater)
        setSavedTree(res.data.data.welcomeStatus.savedTree)
        setCurrentCount(res.data.data.stampStatus.validStampCnt)
        setExchangeable(res.data.data.stampStatus.exchangeable)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div style={{ paddingBottom: '6.5rem' }}>
      <HeaderArea
        userName={userName}
        tumblerCount={tumblerCount}
        savedWater={savedWater}
        savedTree={savedTree}
      />
      <StampArea stamp={currentCount} exchangeable={exchangeable} />
      <CafeRecommend />
      <Footer />
    </div>
  )
}

export default HomePage
