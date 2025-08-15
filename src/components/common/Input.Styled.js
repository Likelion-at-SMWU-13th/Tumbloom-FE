import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Label = styled.label`
  align-self: stretch;
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 0.62rem 0 0.44rem 0;
`
export const InputBox = styled.input`
  width: 20.875rem;
  height: 3.1875rem;
  padding-left
  flex-shrink: 0;
  font-size: 1rem;
  border-radius: 0.625rem;
  background: #efefef;
  border: none;

  &::placeholder {
    padding: 0 0 0 1.25rem;
    color: #828282;
    font-family: 'Pretendard Variable';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`
