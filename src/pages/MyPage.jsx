import React, { useState } from 'react'
import Footer from '@/components/common/Footer'
import ProfileContent from '@/components/MyPage/ProfileContent'
import ProfileInfo from '@/components/MyPage/ProfileInfo'
import LevelModal from '@/components/MyPage/LevelModal'

const MyPage = () => {
  const [info, setInfo] = useState(false)
  return (
    <div style={{ backgroundColor: '#F6FCFB' }}>
      <ProfileContent onChangeInfo={setInfo} />
      <ProfileInfo />
      <Footer />
      {info && <LevelModal onChangeInfo={setInfo} />}
    </div>
  )
}

export default MyPage
