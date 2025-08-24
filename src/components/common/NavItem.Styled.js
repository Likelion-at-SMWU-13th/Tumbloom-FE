import styled from 'styled-components'

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`

export const ItemBtn = styled.button`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  border: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: none;
`

export const NavIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  aspect-ratio: 1/1;
`

export const NavName = styled.span`
  width: 2.75rem;
  height: 0.75rem;
  flex-shrink: 0;
  text-align: center;
  color: #ababab;
  font-family: 'Pretendard Variable';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`
