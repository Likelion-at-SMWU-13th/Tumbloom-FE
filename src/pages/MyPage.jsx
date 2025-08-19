import React from 'react'
import Footer from '@/components/common/Footer'
import ProfileContent from '@/components/MyPage/ProfileContent'
import ProfileInfo from '@/components/MyPage/ProfileInfo'

const MyPage = () => {
  return (
    <div style={{ backgroundColor: '#F6FCFB' }}>
      <ProfileContent />
      <ProfileInfo />
      <Footer />
    </div>
  )
}

export default MyPage
