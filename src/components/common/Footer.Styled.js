import styled from 'styled-components'

export const FooterBox = styled.div`
  display: flex;
  left: 0;
  bottom: 0;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5.6875rem;
  flex-shrink: 0;
  border: 1px solid #d9d9d9;
`

export const FooterRow = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  list-style: none;
  position: relative;
  padding: 0 calc(6.30206rem / 2 + 0.5rem);
`

export const LeftMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-right: 7rem;
`

export const RightMenu = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const ScanItem = styled.li`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -14.9%);
`

export const ScanBtn = styled.img`
  width: 6.30206rem;
  height: 5.977rem;
  flex-shrink: 0;
  cursor: pointer;
`
