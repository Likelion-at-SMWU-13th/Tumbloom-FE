import React from 'react'
import Header from '@/components/common/Header'
import styled from 'styled-components'
import scrabOn from '@/assets/icons/clicked-bookmark.svg'
import scrabOff from '@/assets/icons/bookmark.svg'
import cafeDetail from '@/assets/images/cafe-detail.svg'
import CafeInfoBox from './CafeInfoBox'
import NoData from '../common/NoData'
import MenuBox from './MenuBox'
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

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
  const [active, setActive] = useState(false)
  const [tap, setTap] = useState(false)
  const navigate = useNavigate()
  const [cafe, setCafe] = useState(null)
  const { state } = useLocation()
  const cafeId = state?.cafeId
  const hasMenu = Array.isArray(cafe?.menuList) && cafe.menuList.length > 0

  useEffect(() => {
    const getCafeInfo = async () => {
      const at = localStorage.getItem('accessToken')
      const res = await fetch(`https://tumbloom.store/api/cafes/${cafeId}`, {
        headers: at ? { Authorization: `Bearer ${at}` } : {},
      })
      const json = await res.json().catch(() => ({}))
      if (res.ok && json?.data) {
        setCafe(json.data)
      } else {
        setCafe(null)
      }
    }
    getCafeInfo()
  }, [])

  if (!cafe) return null

  const goToPrev = () => {
    navigate(-1)
  }

  const goToStamp = () => {
    navigate(`/stamp`, { state: { cafeName: cafe.cafeName, cafeImg: cafe.imageUrl } })
  }

  return (
    <div>
      <Header title='카페 상세정보' onLeftClick={goToPrev} />
      <CafeHeaderWrapper>
        <CafeHeader>
          <CafeName>{cafe.cafeName}</CafeName>
          <Scrab>
            <ScrabState
              onClick={() => setActive((prev) => !prev)}
              src={active ? scrabOn : scrabOff}
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
          onClick={() => setTap(!tap)}
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
