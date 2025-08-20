import styled from 'styled-components'

export const ScrollArea = styled.div`
  display: flex;
  width: 24.5625rem;
  flex-direction: column;
`

export const Wrapper = styled.div`
  width: 24.5625rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #d9d9d9;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  & > *:not(:first-child) {
    border-top: 1px solid #d9d9d9;
  }
`

export const CafeListImg = styled.img`
  width: 22.1875rem;
  height: 0.0625rem;
`
