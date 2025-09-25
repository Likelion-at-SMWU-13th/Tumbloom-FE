import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '@/apis/api'
import Header from '@/components/common/Header'
import ProfileShareBox from '@/components/ProfileShare/ProfileShareBox'

const ProfileShare = () => {
  const navigate = useNavigate()

  const [userName, setuserName] = useState('')
  const [tumblerCount, setTumblerCount] = useState('')
  const [savedWater, setSavedWater] = useState('')
  const [savedTree, setSavedTree] = useState('')
  const [level, setLevel] = useState(0)

  useEffect(() => {
    api
      .get(`/api/users/me/home`)
      .then((res) => {
        console.log(res.data)
        setuserName(res.data.data.welcomeStatus.nickname)
        setTumblerCount(res.data.data.welcomeStatus.tumblerCount)
        setSavedWater(res.data.data.welcomeStatus.savedWater)
        setSavedTree(res.data.data.welcomeStatus.savedTree)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    api
      .get(`/api/users/me/mypage`)
      .then((res) => {
        setLevel(res.data.data.level)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <Header title={'프로필 공유'} />
      <ProfileShareBox
        userName={userName}
        tumblerCount={tumblerCount}
        savedWater={savedWater}
        savedTree={savedTree}
        level={level}
      />
    </div>
  )
}

export default ProfileShare
