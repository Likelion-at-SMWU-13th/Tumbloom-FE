import styled from 'styled-components'

// RegisterBtn.jsx

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.5rem 0 0 0;
`

export const Button = styled.button`
  display: flex;
  width: 20.75rem;
  height: 3.5rem;
  padding: 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  border-radius: 1.875rem;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: #25af94;
  color: #fff;
  border: 1.4px solid #828282;
  border: none;
  cursor: pointer;

  &:disabled {
    color: #25af94;
    border: 1.4px solid #25af94;
    background: #fff;
    pointer-events: none;
  }
`
