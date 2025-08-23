import React from 'react'
import * as S from './styled'
import search from '@/assets/icons/search.svg'

const CafeInputField = ({ value, onChange, onKeyDown }) => {
  return (
    <S.SearchInputContainer>
      <S.SearchIcon src={search} />
      <S.SearchInput
        type='text'
        placeholder='카페명 검색'
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </S.SearchInputContainer>
  )
}

export default CafeInputField
