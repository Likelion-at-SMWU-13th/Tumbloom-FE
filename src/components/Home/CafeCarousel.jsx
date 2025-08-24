import React, { useRef, useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import * as S from './styled'
import FilterTap from './FilterTap'
import CafeCard from './CafeCard'
import cafeImg from '@/assets/images/cafe-img.png'
import dotGreen from '@/assets/icons/green-circle.svg'
import dotGrey from '@/assets/icons/grey-circle.svg'
import PreferenceCard from './PreferenceCard'

const mod = (n, m) => ((n % m) + m) % m

const CafeCarousel = () => {
  const baseURL = import.meta.env.VITE_API_BASE_URL
  const navigate = useNavigate()
  const token = localStorage.getItem('accessToken')
  const [cafeRecommendList, setCafeRecommendList] = useState([])
  const [cafeAIList, setCafeAIList] = useState([])
  const lat = 37
  const lng = 126

  const toggleFavorite = (id, isFav) => {
    setCurrentList((prev) => prev.map((c) => (c.id === id ? { ...c, favorite: !isFav } : c)))

    const headers = { Authorization: `Bearer ${token}` }
    const req = isFav
      ? axios.delete(`${baseURL}api/favorites/${id}`, { headers })
      : axios.post(`${baseURL}api/favorites/${id}`, {}, { headers })

    req.catch((err) => {
      console.error(err)
      setCurrentList((prev) => prev.map((c) => (c.id === id ? { ...c, favorite: isFav } : c)))
    })
  }

  useEffect(() => {
    axios
      .get(`${baseURL}api/cafes/nearby/top`, {
        params: { lat, lng },
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data)
        setCafeRecommendList(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    axios
      .get(`${baseURL}api/users/me/cafe-recommendations`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data)
        setCafeAIList(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const [active, setActive] = useState(0)
  const [tab, setTab] = useState(0)

  const currentList = tab === 0 ? cafeRecommendList : cafeAIList
  const setCurrentList = tab === 0 ? setCafeRecommendList : setCafeAIList

  useEffect(() => {
    setActive(0)
  }, [tab])

  const len = currentList.length
  const left = len ? mod(active - 1, len) : 0
  const right = len ? mod(active + 1, len) : 0
  const visible = len ? [left, active % len, right] : []

  return (
    <>
      <FilterTap value={tab} onChangeTab={setTab} />
      {cafeAIList.length === 0 && tab === 1 ? (
        <S.AiRecommendContainer>
          <PreferenceCard />
        </S.AiRecommendContainer>
      ) : len === 0 ? (
        <div style={{ paddingTop: '5rem', textAlign: 'center', color: '#999' }}>
          주변 카페를 불러오는 중…
        </div>
      ) : (
        <S.CafeCarousel>
          <S.CardRow>
            {visible.map((i) => {
              const cafe = currentList[i]
              const isActive = i === active
              return (
                <S.CardContainer
                  key={i}
                  onClick={() =>
                    isActive ? navigate('/detail', { state: { cafeId: cafe.id } }) : setActive(i)
                  }
                  style={{
                    transform: isActive ? 'scale(1)' : 'scale(0.88)',
                    opacity: isActive ? '1' : '0.34',
                    zIndex: isActive ? '2' : '1',
                  }}
                >
                  <CafeCard
                    id={cafe.id}
                    cafeName={cafe.cafeName}
                    cafeAddress={cafe.address}
                    cafeImg={cafe.imageUrl}
                    favorite={cafe.favorite}
                    onToggleFavorite={toggleFavorite}
                  />
                </S.CardContainer>
              )
            })}
          </S.CardRow>
          <S.DotsContainer>
            {currentList.map((_, i) => (
              <S.Dot key={i} src={i === active ? dotGreen : dotGrey} />
            ))}
          </S.DotsContainer>
        </S.CafeCarousel>
      )}
    </>
  )
}

export default CafeCarousel
