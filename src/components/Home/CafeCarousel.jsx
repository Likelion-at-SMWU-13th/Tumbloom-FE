import React, { useState, useEffect } from 'react'
import api from '@/apis/api'
import { useNavigate } from 'react-router-dom'
import * as S from './styled'
import FilterTap from './FilterTap'
import CafeCard from './CafeCard'
import dotGreen from '@/assets/icons/green-circle.svg'
import dotGrey from '@/assets/icons/grey-circle.svg'
import PreferenceCard from './PreferenceCard'
import Loading from '../common/Loading'

const mod = (n, m) => ((n % m) + m) % m

const CafeCarousel = () => {
  const navigate = useNavigate()
  const [cafeRecommendList, setCafeRecommendList] = useState([])
  const [cafeAIList, setCafeAIList] = useState([])
  const lat = localStorage.getItem('lat')
  const lng = localStorage.getItem('lng')

  const toggleFavorite = (id, isFav) => {
    setCurrentList((prev) => prev.map((c) => (c.id === id ? { ...c, favorite: !isFav } : c)))

    const req = isFav ? api.delete(`/api/favorites/${id}`) : api.post(`/api/favorites/${id}`)

    req.catch((err) => {
      console.error(err)
      setCurrentList((prev) => prev.map((c) => (c.id === id ? { ...c, favorite: isFav } : c)))
    })
  }

  useEffect(() => {
    api
      .get(`/api/cafes/nearby/top`, {
        params: { lat, lng },
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
    api
      .get(`/api/users/me/cafe-recommendations`)
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
        <Loading />
      ) : (
        <S.CafeCarousel>
          <S.CardRow>
            {visible.map((i) => {
              const cafe = currentList[i]
              const isActive = i === active
              return (
                <S.CardContainer
                  key={i}
                  onClick={() => (isActive ? navigate(`/detail/${cafe.id}`) : setActive(i))}
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
