import React from 'react'
import * as S from './styled'
import CafeListCard from '../common/CafeListCard'

const FavoriteCafeList = () => {
  const CafeList = [
    { cafeName: '너드커피', location: '서울시 용산구 청파동2가', time: '09:00-15:00' },
    { cafeName: '너드커피', location: '서울시 용산구 청파동2가', time: '09:00-15:00' },
    { cafeName: '너드커피', location: '서울시 용산구 청파동2가', time: '09:00-15:00' },
    { cafeName: '너드커피', location: '서울시 용산구 청파동2가', time: '09:00-15:00' },
    { cafeName: '너드커피', location: '서울시 용산구 청파동2가', time: '09:00-15:00' },
    { cafeName: '너드커피', location: '서울시 용산구 청파동2가', time: '09:00-15:00' },
    { cafeName: '너드커피', location: '서울시 용산구 청파동2가', time: '09:00-15:00' },
    { cafeName: '너드커피', location: '서울시 용산구 청파동2가', time: '09:00-15:00' },
  ]

  return (
    <div>
      <S.Wrapper>
        {CafeList.map((item, i) => (
          <CafeListCard key={i} name={item.cafeName} loc={item.location} time={item.time} />
        ))}
      </S.Wrapper>
    </div>
  )
}

export default FavoriteCafeList
