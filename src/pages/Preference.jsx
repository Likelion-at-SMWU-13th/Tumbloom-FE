import React from 'react'
import Header from '@/components/common/Header'
import Button from '@/components/Preference/Button'
import atmosphere from '@/assets/icons/atmosphere.svg'
import study from '@/assets/icons/study.svg'
import meet from '@/assets/icons/meet.svg'
import hot from '@/assets/icons/hot.svg'
import event from '@/assets/icons/event.svg'
import specialTea from '@/assets/icons/special-tea.svg'
import cake from '@/assets/icons/cake.svg'
import decaf from '@/assets/icons/decaf.svg'
import brunch from '@/assets/icons/brunch.svg'
import seasonMenu from '@/assets/icons/season-menu.svg'
import brand from '@/assets/icons/brand.svg'
import animal from '@/assets/icons/animal.svg'
import sun from '@/assets/icons/sun.svg'
import eco from '@/assets/icons/eco.svg'
import unique from '@/assets/icons/unique.svg'

const Preference = () => {
  return (
    <div>
      <Header title={'내 카페 취향'} />
      <div>
        <Button icon={atmosphere} title={'감성/분위기'} />
        <Button icon={study} title={'공부/작업공간'} />
        <Button icon={meet} title={'수다/모임'} />
        <Button icon={hot} title={'HOT플레이스'} />
        <Button icon={event} title={'이벤트/행사'} />
      </div>
    </div>
  )
}

export default Preference
