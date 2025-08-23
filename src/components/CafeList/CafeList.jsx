import React from 'react'
import Header from '../common/Header'
import CafeListCard from '../common/CafeListCard'
import cafeListLine from '@/assets/images/cafe-list-line.svg'
import * as S from '@/components/CafeList/CafeList.Styled'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function CafeList() {
  const [cafes, setCafes] = useState([])
  const navigate = useNavigate()
  const location = useLocation()

  const { lat, lng } = location.state || {}

  const nearCafeList = async (lat, lng) => {
    const at = localStorage.getItem('accessToken')
    if (!at || at === 'undefined') {
      console.log('로컬스토리지에 accessToken 없음')
      return
    }
    const res = await fetch(`https://tumbloom.store/api/cafes/nearby?lat=${lat}&lng=${lng}`, {
      headers: { Authorization: `Bearer ${at}` },
    })
    const json = await res.json().catch(() => ({}))
    if (!res.ok || !Array.isArray(json?.data)) {
      console.log('coupon error', res.status, json)
      setCafes([])
      return
    }
    setCafes(
      json.data.map((c) => ({
        id: c.id,
        cName: c.cafeName,
        address: c.address,
        t: c.businessHours,
        img: c.imageUrl,
      })),
    )
  }

  useEffect(() => {
    if (lat && lng) nearCafeList(lat, lng)
  }, [lat, lng])

  const goToMap = () => {
    navigate(`/map`)
  }

  return (
    <>
      <Header title='카페 목록보기' onLeftClick={goToMap} />
      <S.ScrollArea>
        <S.Wrapper>
          {cafes.map((c) => (
            <CafeListCard id={c.id} name={c.cName} loc={c.address} time={c.t} image={c.img} />
          ))}
        </S.Wrapper>
      </S.ScrollArea>
    </>
  )
}

export default CafeList
