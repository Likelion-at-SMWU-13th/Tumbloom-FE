import React from 'react'
import api from '@/apis/api'
import Header from '@/components/common/Header'
import styled from 'styled-components'
import scrabOn from '@/assets/icons/clicked-bookmark.svg'
import scrabOff from '@/assets/icons/bookmark.svg'
import CafeInfoBox from '../components/CafeInfo/CafeInfoBox'
import NoData from '../components/common/NoData'
import MenuBox from '../components/CafeInfo/MenuBox'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const CafeHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #d9d9d9;
  align-items: center;
`

const CafeHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.56rem 1.25rem 0.94rem 1.25rem;
  box-sizing: border-box;
`

const CafeName = styled.span`
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 22rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const Scrab = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5625rem;
  height: 1.5625rem;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  border: none;
  background-color: transparent;
`

const ScrabState = styled.img`
  width: 1.5625rem;
  height: 1.5625rem;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  cursor: pointer;
`

const CafeImg = styled.img`
  width: 22.0625rem;
  height: 11.125rem;
  flex-shrink: 0;
  border-radius: 0.3125rem;
  object-fit: cover;
`

const FilterTap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
`

const InfoTap = styled.span`
  width: 10.5625rem;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-bottom: 1.5px solid black;
  padding: 1.25rem 0 0.69rem 0;
  color: #d9d9d9;
`

const MenuTap = styled.span`
  width: 10.5625rem;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-bottom: 1.5px solid black;
  padding: 1.25rem 0 0.69rem 0;
  color: #d9d9d9;
`

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24.35rem;
`

const StampBtn = styled.button`
  color: #fff;
  font-family: 'Pretendard Variable';
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  width: 22.0625rem;
  height: 3.5rem;
  padding: 0.66625rem 1.08263rem;
  justify-content: center;
  align-items: center;
  gap: 0.83281rem;
  flex-shrink: 0;
  border-radius: 24.98356rem;
  background: #25af94;
  border: none;
  cursor: pointer;
`
const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 2.44rem;
`

function CafeDetail() {
  const [tap, setTap] = useState(true)
  const navigate = useNavigate()
  const [cafe, setCafe] = useState(null)
  const { cafeId } = useParams()
  const hasMenu = Array.isArray(cafe?.menuList) && cafe.menuList.length > 0

  useEffect(() => {
    if (!cafeId) return
    const getCafeInfo = async () => {
      try {
        const res = await api.get(`/api/cafes/${cafeId}`)
        if (res.data?.data) {
          setCafe(res.data.data)
        } else {
          setCafe(null)
        }
      } catch (err) {
        console.error('카페 정보 불러오기 실패', err)
        setCafe(null)
      }
    }
    getCafeInfo()
  }, [cafeId])

  const handleFav = (id, isFav) => {
    const at = localStorage.getItem('accessToken')
    if (!at || at === 'undefined') {
      console.error('no token')
      return
    }
    setCafe((prev) => (prev ? { ...prev, favorite: !isFav } : prev))

    const headers = { Authorization: `Bearer ${at}` }
    const req = isFav ? api.delete(`/api/favorites/${id}`) : api.post(`/api/favorites/${id}`)

    req.catch((err) => {
      console.error(err)
      setCafe((prev) => (prev ? { ...prev, favorite: isFav } : prev))
    })
  }

  if (!cafe) return null

  const goToStamp = () => {
    navigate(`/stamp/${cafeId}`)
  }

  return (
    <div>
      <Header title='카페 상세정보' />
      <CafeHeaderWrapper>
        <CafeHeader>
          <CafeName>{cafe.cafeName}</CafeName>
          <Scrab>
            <ScrabState
              onClick={() => handleFav(cafe.id, !!cafe.favorite)}
              src={cafe.favorite ? scrabOn : scrabOff}
            />
          </Scrab>
        </CafeHeader>
        <CafeImg src={cafe.imageUrl} />
      </CafeHeaderWrapper>
      <FilterTap>
        <InfoTap
          onClick={() => setTap(true)}
          style={{
            color: tap ? '#000' : '#d9d9d9',
            borderBottom: tap ? '1.5px solid #000' : '1.5px solid #d9d9d9',
          }}
        >
          기본정보
        </InfoTap>
        <MenuTap
          onClick={() => setTap(false)}
          style={{
            color: !tap ? '#000' : '#d9d9d9',
            borderBottom: !tap ? '1.5px solid #000' : '1.5px solid #d9d9d9',
          }}
        >
          메뉴
        </MenuTap>
      </FilterTap>
      <InfoWrapper>
        {tap ? (
          <CafeInfoBox cafe={cafe} />
        ) : hasMenu ? (
          <MenuBox cafe={cafe} />
        ) : (
          <NoData
            message={
              <>
                해당 카페의 등록된
                <br />
                메뉴정보가 없습니다
              </>
            }
          />
        )}
      </InfoWrapper>
      <BtnContainer>
        <StampBtn onClick={goToStamp}>스탬프 적립하기</StampBtn>
      </BtnContainer>
    </div>
  )
}

export default CafeDetail
