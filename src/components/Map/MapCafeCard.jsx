import React from 'react'
import axios from 'axios'
import locImg from '@/assets/icons/cafe-info-loc.svg'
import timeImg from '@/assets/icons/cafe-info-time.svg'
import { useState, useEffect } from 'react'
import scrabOn from '@/assets/icons/clicked-bookmark.svg'
import scrabOff from '@/assets/icons/bookmark.svg'
import { useNavigate } from 'react-router-dom'
import * as S from './Map.Styled.js'

function MapCafeCard({ cafeId }) {
  const baseURL = import.meta.env.VITE_API_BASE_URL
  const [active, setActive] = useState(false)
  const [cafe, setCafe] = useState(null)
  const navigate = useNavigate()

  const handleFav = (id, isFav) => {
    const at = localStorage.getItem('accessToken')
    if (!at || at === 'undefined') {
      console.error('no token')
      return
    }
    setCafe((prev) => (prev ? { ...prev, favorite: !isFav } : prev))

    const headers = { Authorization: `Bearer ${at}` }
    const req = isFav
      ? axios.delete(`${baseURL}api/favorites/${id}`, { headers })
      : axios.post(`${baseURL}api/favorites/${id}`, {}, { headers })

    req.catch((err) => {
      console.error(err)
      setCafe((prev) => (prev ? { ...prev, favorite: isFav } : prev))
    })
  }

  const goToDetail = () => {
    navigate(`/detail/${cafeId}`)
  }

  const goToGetStamp = () => {
    navigate(`/stamp/${cafeId}`)
  }

  const cafeInfo = async (cafeId) => {
    if (!cafeId) return
    const at = localStorage.getItem('accessToken')
    if (!at || at === 'undefined') {
      console.log('로컬스토리지에 accessToken 없음')
      return
    }
    const res = await fetch(`${baseURL}api/cafes/${cafeId}`, {
      headers: { Authorization: `Bearer ${at}` },
    })

    const json = await res.json()
    const info = json.data

    setCafe({
      id: info.id,
      cName: info.cafeName,
      address: info.address,
      t: info.businessHours,
      img: info.imageUrl,
      favorite: !!info.favorite,
    })
  }

  useEffect(() => {
    cafeInfo(cafeId)
  }, [cafeId])

  if (!cafe) return null

  return (
    <S.Container onClick={goToDetail}>
      <S.TopContent>
        <S.CafeName>{cafe.cName}</S.CafeName>
        <S.Scrab>
          <S.ScrabState
            onClick={(e) => {
              e.stopPropagation()
              handleFav(cafe.id, !!cafe.favorite)
            }}
            src={cafe.favorite ? scrabOn : scrabOff}
          />
        </S.Scrab>
      </S.TopContent>
      <S.ContentBox>
        <S.LeftCard>
          <S.CafeImg src={cafe.img} />
        </S.LeftCard>
        <S.RightCard>
          <S.StampBtn
            onClick={(e) => {
              e.stopPropagation()
              goToGetStamp()
            }}
          >
            스탬프 적립하기
          </S.StampBtn>
          <S.InfoBox>
            <S.LocBox>
              <S.LocImg src={locImg} />
              <S.Loc>{cafe.address}</S.Loc>
            </S.LocBox>
            <S.TimeBox>
              <S.TimeImg src={timeImg} />
              <S.Time>{cafe.t.substr(2, 13)}</S.Time>
            </S.TimeBox>
          </S.InfoBox>
        </S.RightCard>
      </S.ContentBox>
    </S.Container>
  )
}

export default MapCafeCard
