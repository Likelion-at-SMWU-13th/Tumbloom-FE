import React from 'react'
import styled from 'styled-components'
import search from '@/assets/icons/search.svg'

const SearchInput = styled.input`
  display: flex;
  width: 22.0625rem;
  height: 3.0625rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
  border: none;
  padding-top: 0.25rem;
  padding-left: 3.06rem;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  &::placeholder {
    color: #757575;
    font-family: 'Pretendard Variable';
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`

const SearchInputContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`

const SearchIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  position: absolute;
  left: 2.2rem;
`

const SearchBox = () => {
  return (
    <SearchInputContainer>
      <SearchIcon src={search} />
      <SearchInput type='text' placeholder='카페명 또는 지역 검색' />
    </SearchInputContainer>
  )
}

export default SearchBox
