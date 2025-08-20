import React, { useState } from 'react'
import Header from '@/components/common/Header'
import ChoosePreference from '@/components/Preference/ChoosePreference'

const Preference = () => {
  return (
    <div>
      <Header title={'내 카페 취향'} />
      <ChoosePreference />
    </div>
  )
}

export default Preference
