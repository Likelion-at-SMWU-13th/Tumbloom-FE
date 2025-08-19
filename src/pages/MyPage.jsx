import React, { useState } from 'react'
import Footer from '@/components/common/Footer'
import ProfileContent from '@/components/MyPage/ProfileContent'
import ProfileInfo from '@/components/MyPage/ProfileInfo'
import LevelModal from '@/components/MyPage/LevelModal'

const MyPage = () => {
  const [info, setInfo] = useState(false)

  const stamp = 5

  return (
    <div style={{ backgroundColor: '#F6FCFB' }}>
      <ProfileContent onChangeInfo={setInfo} stamp={stamp} />
      <ProfileInfo />
      <Footer />
      {info && <LevelModal onChangeInfo={setInfo} />}
    </div>
  )
}

export default MyPage
