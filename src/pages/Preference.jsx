import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '@/components/common/Header'
import ChoosePreference from '@/components/Preference/ChoosePreference'

const Preference = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Header title={'내 카페 취향'} onLeftClick={() => navigate(-1)} />
      <ChoosePreference />
    </div>
  )
}

export default Preference
