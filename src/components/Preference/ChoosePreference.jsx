import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '@/apis/api'
import * as S from './styled'
import Button from './Button'
import NoticeModal from '../common/NoticeModal'
import atmosphere from '@/assets/icons/atmosphere.svg'
import atmosphere_green from '@/assets/icons/atmosphere-green.svg'
import study from '@/assets/icons/study.svg'
import study_green from '@/assets/icons/study-green.svg'
import meet from '@/assets/icons/meet.svg'
import meet_green from '@/assets/icons/meet-green.svg'
import hot from '@/assets/icons/hot.svg'
import hot_green from '@/assets/icons/hot-green.svg'
import event from '@/assets/icons/event.svg'
import event_green from '@/assets/icons/event-green.svg'
import specialTea from '@/assets/icons/special-tea.svg'
import specialTea_green from '@/assets/icons/special-tea-green.svg'
import cake from '@/assets/icons/cake.svg'
import cake_green from '@/assets/icons/cake-green.svg'
import decaf from '@/assets/icons/decaf.svg'
import decaf_green from '@/assets/icons/decaf-green.svg'
import brunch from '@/assets/icons/brunch.svg'
import brunch_green from '@/assets/icons/brunch-green.svg'
import seasonMenu from '@/assets/icons/season-menu.svg'
import seasonMenu_green from '@/assets/icons/season-menu-green.svg'
import brand from '@/assets/icons/brand.svg'
import brand_green from '@/assets/icons/brand-green.svg'
import animal from '@/assets/icons/animal.svg'
import animal_green from '@/assets/icons/animal-green.svg'
import sun from '@/assets/icons/sun.svg'
import sun_green from '@/assets/icons/sun-green.svg'
import eco from '@/assets/icons/eco.svg'
import eco_green from '@/assets/icons/eco-green.svg'
import unique from '@/assets/icons/unique.svg'
import unique_green from '@/assets/icons/unique-green.svg'

const ChoosePreference = () => {
  const PURPOSE = [
    { key: 'atmosphere', title: '감성/분위기', off: atmosphere, on: atmosphere_green },
    { key: 'study', title: '공부/작업공간', off: study, on: study_green },
    { key: 'meet', title: '수다/모임', off: meet, on: meet_green },
    { key: 'hot', title: 'HOT플레이스', off: hot, on: hot_green },
    { key: 'event', title: '이벤트/행사', off: event, on: event_green },
  ]

  const MENU = [
    { key: 'specialTea', title: '고급/스페셜티', off: specialTea, on: specialTea_green },
    { key: 'cake', title: '디저트/케익', off: cake, on: cake_green },
    { key: 'decaf', title: '디카페인', off: decaf, on: decaf_green },
    { key: 'brunch', title: '브런치/식사', off: brunch, on: brunch_green },
    { key: 'seasonMenu', title: '빙수/계절메뉴', off: seasonMenu, on: seasonMenu_green },
  ]

  const ETC = [
    { key: 'brand', title: '브랜드/프랜차이즈', off: brand, on: brand_green },
    { key: 'animal', title: '반려동물 가능', off: animal, on: animal_green },
    { key: 'sun', title: '야외/테라스', off: sun, on: sun_green },
    { key: 'eco', title: '친환경/로컬', off: eco, on: eco_green },
    { key: 'unique', title: '이색테마/메뉴', off: unique, on: unique_green },
  ]

  const PURPOSE_ENUM = {
    atmosphere: 'EMOTIONAL_ATMOSPHERE',
    study: 'STUDY_WORKSPACE',
    meet: 'CHAT_MEETING',
    hot: 'HOT_PLACE',
    event: 'EVENT',
  }

  const MENU_ENUM = {
    specialTea: 'SPECIALTY',
    cake: 'DESSERT',
    decaf: 'DECAF',
    seasonMenu: 'SEASON_MENU',
    brunch: 'BRUNCH',
  }

  const ETC_ENUM = {
    brand: 'FRANCHISE',
    animal: 'PET_FRIENDLY',
    sun: 'OUTDOOR_TERRACE',
    eco: 'ECO_LOCAL',
    unique: 'UNIQUE_THEME',
  }

  const [selected, setSelected] = useState([])

  const toggle = (key) =>
    setSelected((s) => (s.includes(key) ? s.filter((k) => k !== key) : [...s, key]))

  const isOn = (key) => selected.includes(key)

  const total = selected.length

  const [openModal, setOpenModal] = useState(false)

  const navigate = useNavigate()

  const handleSave = () => {
    const visitPurposes = selected.filter((k) => PURPOSE_ENUM[k]).map((k) => PURPOSE_ENUM[k])

    const preferredMenus = selected.filter((k) => MENU_ENUM[k]).map((k) => MENU_ENUM[k])

    const extraOptions = selected.filter((k) => ETC_ENUM[k]).map((k) => ETC_ENUM[k])

    const body = { visitPurposes, preferredMenus, extraOptions }

    api
      .put(`/api/users/me/preferences`, body)
      .then((res) => {
        console.log(res.data)
        setOpenModal(true)
      })
      .catch((err) => {
        console.error(err)
        alert(err?.response?.data?.message ?? '저장에 실패했어요')
      })
  }

  return (
    <>
      <S.Wrapper>
        <S.TitleBox>
          <S.Title>
            텀블러인 AI에게 취향을 기반으로
            <br />
            마음에 드는 카페를 추천받을 수 있어요
          </S.Title>
          <S.selectText>{total}개 항목 선택됨</S.selectText>
        </S.TitleBox>
        <S.CategoryBox>
          <S.CategoryTextContainer>
            <S.CategoryText>방문 목적</S.CategoryText>
          </S.CategoryTextContainer>
          <S.BtnContainer>
            {PURPOSE.map((item) => (
              <Button
                key={item.key}
                icon={isOn(item.key) ? item.on : item.off}
                title={item.title}
                active={isOn(item.key)}
                onClick={() => toggle(item.key)}
              />
            ))}
          </S.BtnContainer>
        </S.CategoryBox>
        <S.CategoryBox>
          <S.CategoryTextContainer>
            <S.CategoryText>선호 메뉴</S.CategoryText>
          </S.CategoryTextContainer>
          <S.BtnContainer>
            {MENU.map((item) => (
              <Button
                key={item.key}
                icon={isOn(item.key) ? item.on : item.off}
                title={item.title}
                active={isOn(item.key)}
                onClick={() => toggle(item.key)}
              />
            ))}
          </S.BtnContainer>
        </S.CategoryBox>
        <S.CategoryBox>
          <S.CategoryTextContainer>
            <S.CategoryText>기타 옵션</S.CategoryText>
          </S.CategoryTextContainer>
          <S.BtnContainer>
            {ETC.map((item) => (
              <Button
                key={item.key}
                icon={isOn(item.key) ? item.on : item.off}
                title={item.title}
                active={isOn(item.key)}
                onClick={() => toggle(item.key)}
              />
            ))}
          </S.BtnContainer>
        </S.CategoryBox>
        <S.SaveBtnContainer>
          <S.SaveBtn onClick={handleSave}>저장하기</S.SaveBtn>
        </S.SaveBtnContainer>
      </S.Wrapper>
      {openModal && (
        <NoticeModal
          type={'check'}
          title={'내 취향이 성공적으로 저장됐어요'}
          subTitle={'홈에서 AI에게 카페 추천을 받을 수 있어요'}
          btnLeft={'취향수정 '}
          btnRight={'홈으로 가기'}
          onChangeBtnLeft={() => setOpenModal(false)}
          onChangeBtnRight={() => navigate('/home')}
          open
        />
      )}
    </>
  )
}

export default ChoosePreference
