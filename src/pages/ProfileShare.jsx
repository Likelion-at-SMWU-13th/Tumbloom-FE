import React from 'react'
import Header from '@/components/common/Header'
import ProfileCard from '@/components/ProfileShare/ProfileCard'
import ProfileShareBox from '@/components/ProfileShare/ProfileShareBox'

const ProfileShare = () => {
  return (
    <div>
      <Header title={'프로필 공유'} />
      <ProfileShareBox stamp={41} userName={'텀블러91'} />
    </div>
  )
}

export default ProfileShare
