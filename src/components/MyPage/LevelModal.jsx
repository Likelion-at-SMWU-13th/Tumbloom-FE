import React from 'react'
import * as S from './styled'

const LevelModal = () => {
  return (
    <S.LevelModalWrapper>
      <div>
        <S.LevelTitle>텀블러인 등급</S.LevelTitle>
      </div>
      <S.InfoBox>
        <S.LevelBox>
          <S.Level style={{ color: '#c2ec85' }}>Lv.1</S.Level>
          <S.Level style={{ color: '#99DB86' }}>Lv.2</S.Level>
          <S.Level style={{ color: '#71C986' }}>Lv.3</S.Level>
          <S.Level style={{ color: '#55BC86' }}>Lv.4</S.Level>
          <S.Level style={{ color: '#31AC87' }}>Lv.5</S.Level>
        </S.LevelBox>
        <S.LevelNameBox>
          <S.LevelName>
            텀블러 뉴비 <br />
            텀블러 입문자
            <br />
            텀블러 러버
            <br />
            텀블러 고수
            <br />
            텀블러 히어로
          </S.LevelName>
        </S.LevelNameBox>
        <div>
          <S.LevelCount>
            0~4회 <br />
            5~10회
            <br />
            11~20회
            <br />
            21~40회
            <br />
            41회 이상
          </S.LevelCount>
        </div>
      </S.InfoBox>
    </S.LevelModalWrapper>
  )
}

export default LevelModal
