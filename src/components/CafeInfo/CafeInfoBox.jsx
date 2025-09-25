import React from 'react'
import locIcon from '@/assets/icons/cafe-info-loc.svg'
import timeIcon from '@/assets/icons/cafe-info-time.svg'
import numIcon from '@/assets/icons/cafe-info-num.svg'
import * as S from './CafeInfo.Styled.js'

function CafeInfoBox({ cafe }) {
  return (
    <>
      <S.InfoBox>
        <S.Location>
          <S.InfoName>
            <img src={locIcon} />
            위치
          </S.InfoName>
          <S.LocInfoDetail>
            {cafe.address}
            {cafe.detailAddress}
          </S.LocInfoDetail>
        </S.Location>
        <S.Time>
          <S.InfoName>
            <img src={timeIcon} />
            영업시간
          </S.InfoName>
          <S.InfoDetail>
            <S.TimeRow>
              <S.BusinessHour>{cafe.businessHours}</S.BusinessHour>
            </S.TimeRow>
          </S.InfoDetail>
        </S.Time>
        <S.Num>
          <S.InfoName>
            <img src={numIcon} />
            연락처
          </S.InfoName>
          <S.InfoDetail>{cafe.callNumber}</S.InfoDetail>
        </S.Num>
      </S.InfoBox>
    </>
  )
}

export default CafeInfoBox
