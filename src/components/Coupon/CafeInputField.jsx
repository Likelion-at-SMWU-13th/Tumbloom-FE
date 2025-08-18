import React from 'react'
import * as S from './styled'
import search from '@/assets/icons/search.svg'

const CafeInputField = () => {
  return (
    <S.SearchInputContainer>
      <S.SearchIcon src={search} />
      <S.SearchInput type='text' placeholder='카페명 검색' />
    </S.SearchInputContainer>
  )
}

export default CafeInputField
