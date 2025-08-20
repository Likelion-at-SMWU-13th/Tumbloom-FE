import React from 'react'
import Header from '../common/Header'
import CafeListCard from '../common/CafeListCard'
import cafeListLine from '@/assets/images/cafe-list-line.svg'
import * as S from '@/components/CafeList/CafeList.Styled'

function CafeList() {
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
    <>
      <Header title='카페 목록보기' />
      <S.ScrollArea>
        {' '}
        <S.Wrapper>
          {CafeList.map((item, i) => (
            <CafeListCard key={i} name={item.cafeName} loc={item.location} time={item.time} />
          ))}
        </S.Wrapper>
      </S.ScrollArea>
    </>
  )
}

export default CafeList
