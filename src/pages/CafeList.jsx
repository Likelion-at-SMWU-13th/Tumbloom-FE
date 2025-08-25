import React from 'react'
import Header from '../components/common/Header'
import CafeListCard from '../components/common/CafeListCard'
import cafeListLine from '@/assets/images/cafe-list-line.svg'
import * as S from '@/components/CafeList/CafeList.Styled'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function CafeList() {
  const baseURL = import.meta.env.VITE_API_BASE_URL
  const [cafes, setCafes] = useState([])
  const location = useLocation()

  const { lat, lng } = location.state || {}

  const nearCafeList = async (lat, lng) => {
    const at = localStorage.getItem('accessToken')
    if (!at || at === 'undefined') {
      console.log('로컬스토리지에 accessToken 없음')
      return
    }
    const res = await fetch(`${baseURL}api/cafes/nearby?lat=${lat}&lng=${lng}`, {
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
        t: c.businessHours.substr(2, 13),
        img: c.imageUrl,
      })),
    )
  }

  useEffect(() => {
    if (lat && lng) nearCafeList(lat, lng)
  }, [lat, lng])

  return (
    <>
      <Header title='카페 목록보기' />
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
