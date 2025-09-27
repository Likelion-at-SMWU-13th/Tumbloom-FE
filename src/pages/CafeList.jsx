import React from 'react'
import Header from '../components/common/Header'
import CafeListCard from '../components/common/CafeListCard'
import * as S from '@/components/CafeList/CafeList.Styled'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import api from '@/apis/api'

function CafeList() {
  const [cafes, setCafes] = useState([])
  const location = useLocation()
  const { lat, lng } = location.state || {}

  const nearCafeList = async (lat, lng) => {
    try {
      const res = await api.get(`/api/cafes/nearby`, { params: { lat, lng } })

      if (!Array.isArray(res.data?.data)) {
        console.log('카페 데이터가 배열이 아님', res.data)
        setCafes([])
        return
      }

      setCafes(
        res.data.map((c) => ({
          id: c.id,
          cName: c.cafeName,
          address: c.address,
          t: c.businessHours.substr(2, 13),
          img: c.imageUrl,
        })),
      )
    } catch (err) {
      console.log('카페 데이터 불러오기 실패', err)
      setCafes([])
    }
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
