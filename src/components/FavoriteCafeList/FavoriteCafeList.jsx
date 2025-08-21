import React from 'react'
import * as S from './styled'
import CafeListCard from '../common/CafeListCard'

const FavoriteCafeList = () => {
  const CafeList = [
    {
      cafeName: '너드커피',
      location: '서울시 용산구 청파동2가',
      time: '09:00-15:00',
      image: 'https://i.pinimg.com/736x/86/c7/58/86c7581fb49f028ae26b947441f3656e.jpg',
    },
    {
      cafeName: '너드커피',
      location: '서울시 용산구 청파동2가',
      time: '09:00-15:00',
      image: 'https://i.pinimg.com/736x/31/a0/88/31a088bda3c5a64cf05a8ed7d8b3039f.jpg',
    },
    {
      cafeName: '너드커피',
      location: '서울시 용산구 청파동2가',
      time: '09:00-15:00',
      image: 'https://i.pinimg.com/736x/86/c7/58/86c7581fb49f028ae26b947441f3656e.jpg',
    },
    {
      cafeName: '너드커피',
      location: '서울시 용산구 청파동2가',
      time: '09:00-15:00',
      image: 'https://i.pinimg.com/736x/6d/3c/29/6d3c29b11645e591010cae3950c3681d.jpg',
    },
    {
      cafeName: '너드커피',
      location: '서울시 용산구 청파동2가',
      time: '09:00-15:00',
      image: 'https://i.pinimg.com/736x/e1/d5/88/e1d5885a67a1897e7d403221b5627510.jpg',
    },
    {
      cafeName: '너드커피',
      location: '서울시 용산구 청파동2가',
      time: '09:00-15:00',
      image: 'https://i.pinimg.com/736x/07/e8/1e/07e81e269c70485a299a35fe8b3b9cba.jpg',
    },
    {
      cafeName: '너드커피',
      location: '서울시 용산구 청파동2가',
      time: '09:00-15:00',
      image: 'https://i.pinimg.com/736x/07/33/d0/0733d09fadce6386f3378e7c456f773a.jpg',
    },
    {
      cafeName: '너드커피',
      location: '서울시 용산구 청파동2가',
      time: '09:00-15:00',
      image: 'https://i.pinimg.com/736x/76/2c/0a/762c0ab2efdb674933568634e44796e6.jpg',
    },
  ]

  return (
    <div>
      <S.Wrapper>
        {CafeList.map((item, i) => (
          <CafeListCard
            key={i}
            name={item.cafeName}
            loc={item.location}
            time={item.time}
            image={item.image}
          />
        ))}
      </S.Wrapper>
    </div>
  )
}

export default FavoriteCafeList
