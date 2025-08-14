import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './styled'
import FilterTap from './FilterTap'
import CafeCard from './CafeCard'
import cafeImg from '@/assets/images/cafe-img.png'
import dotGreen from '@/assets/icons/green-circle.svg'
import dotGrey from '@/assets/icons/grey-circle.svg'

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
      image: 'https://i.pinimg.com/736x/70/30/07/7030076830ff36ba81861cc77d3f1503.jpg',
      cafeName: '청파로움',
      address: '서울 용산구 청파동5가',
      bookmark: false,
    },
    {
      image: 'https://i.pinimg.com/736x/dc/60/45/dc6045915b8af252220f17127f8d6666.jpg',
      cafeName: '쥬케로',
      address: '서울 용산구 청파동3가',
      bookmark: false,
    },
  ]

  const CafeListAI = [
    {
      image: cafeImg,
      cafeName: '카페1',
      address: '서울 용산구 남영동1가',
      bookmark: true,
    },
    {
      image: 'https://i.pinimg.com/736x/88/e6/52/88e652d26358fdff316db07ac08d13f3.jpg',
      cafeName: '카페2',
      address: '서울 용산구 남영동2가',
      bookmark: false,
    },
    {
      image: 'https://i.pinimg.com/1200x/60/0c/47/600c47609169e67f27934307a2c0c994.jpg',
      cafeName: '카페3',
      address: '서울 용산구 남영동3가',
      bookmark: false,
    },
    {
      image: 'https://i.pinimg.com/736x/70/30/07/7030076830ff36ba81861cc77d3f1503.jpg',
      cafeName: '카페4',
      address: '서울 용산구 남영동4가',
      bookmark: false,
    },
    {
      image: 'https://i.pinimg.com/736x/dc/60/45/dc6045915b8af252220f17127f8d6666.jpg',
      cafeName: '카페5',
      address: '서울 용산구 남영동5가',
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
                  opacity: isActive ? '1' : '0.34',
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
        <S.DotsContainer>
          {CafeList.map((_, i) => (
            <S.Dot key={i} src={i === active ? dotGreen : dotGrey} />
          ))}
        </S.DotsContainer>
      </S.CafeCarousel>
    </>
  )
}

export default CafeCarousel
