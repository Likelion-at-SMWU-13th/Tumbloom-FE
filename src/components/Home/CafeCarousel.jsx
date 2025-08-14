import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './styled'
import FilterTap from './FilterTap'
import CafeCard from './CafeCard'
import PaginationDots from './PaginationDots'
import cafeImg from '@/assets/images/cafe-img.png'

const mod = (n, m) => ((n % m) + m) % m

const CafeCarousel = () => {
  const CafeList = [
    {
      image: cafeImg,
      cafeName: '모모카페',
      address: '서울 용산구 청파동2가',
      bookmark: true,
    },
    {
      image: 'https://i.pinimg.com/736x/88/e6/52/88e652d26358fdff316db07ac08d13f3.jpg',
      cafeName: '청파맨션',
      address: '서울 용산구 청파동1가',
      bookmark: false,
    },
    {
      image: 'https://i.pinimg.com/1200x/60/0c/47/600c47609169e67f27934307a2c0c994.jpg',
      cafeName: '을의커피',
      address: '서울 용산구 청파동4가',
      bookmark: false,
    },
    {
      image: cafeImg,
      cafeName: '청파로움',
      address: '서울 용산구 청파동5가',
      bookmark: false,
    },
    {
      image: cafeImg,
      cafeName: '쥬케로',
      address: '서울 용산구 청파동3가',
      bookmark: false,
    },
  ]
  const [active, setActive] = useState(0)

  const left = mod(active - 1, CafeList.length)
  const right = mod(active + 1, CafeList.length)
  const visible = [left, active, right]

  return (
    <>
      <FilterTap />
      <S.CafeCarousel>
        <S.CardRow>
          {visible.map((i) => {
            const cafe = CafeList[i]
            const isActive = i === active
            return (
              <S.CardContainer
                key={i}
                onClick={() => setActive(i)}
                style={{
                  transform: isActive ? 'scale(1)' : 'scale(0.88)',
                  opacity: isActive ? '1' : '0.55',
                  zIndex: isActive ? '2' : '1',
                }}
              >
                <CafeCard
                  cafeName={cafe.cafeName}
                  cafeAddress={cafe.address}
                  cafeImg={cafe.image}
                />
              </S.CardContainer>
            )
          })}
        </S.CardRow>
        <PaginationDots />
      </S.CafeCarousel>
    </>
  )
}

export default CafeCarousel
