import React from 'react'
import Header from '../common/Header'
import CafeListCard from '../common/CafeListCard'
import cafeListLine from '@/assets/images/cafe-list-line.svg'
import styled from 'styled-components'

const ScrollArea = styled.div`
  display: flex;
  width: 24.5625rem;
  flex-direction: column;
`

const Wrapper = styled.div`
  width: 24.5625rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #d9d9d9;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  & > *:not(:first-child) {
    border-top: 1px solid #d9d9d9;
  }
`

const CafeListImg = styled.img`
  width: 22.1875rem;
  height: 0.0625rem;
`

// const Pad = styled.div`
//   display: flex;
//   border: 1px solid blue;
//   width: 100%;
//   height: 1rem;
// `

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
      <ScrollArea>
        {' '}
        <Wrapper>
          {CafeList.map((item, i) => (
            <CafeListCard key={i} name={item.cafeName} loc={item.location} time={item.time} />
          ))}
        </Wrapper>
      </ScrollArea>
    </>
  )
}

export default CafeList
