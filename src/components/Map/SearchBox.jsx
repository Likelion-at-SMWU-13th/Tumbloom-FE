import React from 'react'
import search from '@/assets/icons/search.svg'
import { useState, useEffect } from 'react'
import * as S from './Map.Styled.js'

const SearchBox = ({ onSearch, onClick, txt }) => {
  const [text, setText] = useState('')

  useEffect(() => {
    setText(txt ?? '')
  }, [txt])

  const handleEnterBtn = (e) => {
    if (e.key === 'Enter') {
      if (text) {
        onSearch(text)
      }
    }
  }
  return (
    <S.SearchInputContainer>
      <S.SearchIcon src={search} />
      <S.SearchInput
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleEnterBtn}
        type='text'
        placeholder='카페명 또는 지역 검색'
        onClick={onClick}
      />
    </S.SearchInputContainer>
  )
}

export default SearchBox
