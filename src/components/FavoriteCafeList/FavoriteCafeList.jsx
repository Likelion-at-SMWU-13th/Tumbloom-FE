import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import * as S from './styled'
import CafeListCard from '../common/CafeListCard'

const FavoriteCafeList = () => {
  const baseURL = import.meta.env.VITE_API_BASE_URL
  const [favoriteCafeList, setFavoriteCafrList] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    axios
      .get(`${baseURL}api/users/me/favorites`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data)
        setFavoriteCafrList(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <S.Wrapper>
        {favoriteCafeList.map((item, i) => (
          <CafeListCard
            id={item.id}
            key={item.id}
            name={item.cafeName}
            loc={item.address}
            time={item.businessHours.substr(2, 13)}
            image={item.imageUrl}
          />
        ))}
      </S.Wrapper>
    </div>
  )
}

export default FavoriteCafeList
