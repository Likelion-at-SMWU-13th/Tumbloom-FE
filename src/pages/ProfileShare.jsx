import React from 'react'
import Header from '@/components/common/Header'
import ProfileCard from '@/components/ProfileShare/ProfileCard'

const ProfileShare = () => {
  return (
    <div>
      <Header title={'프로필 공유'} />
      <ProfileCard stamp={41} userName={'텀블러91'} />
    </div>
  )
}

export default ProfileShare
