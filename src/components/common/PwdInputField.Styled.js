import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const InputField = styled.div`
  display: flex;
  flex-direction: row;
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
  flex-shrink: 0;
  padding-left: 1.25rem;
  font-size: 1rem;
  border-radius: 0.625rem;
  background: #efefef;
  border: none;

  &::placeholder {
    color: #828282;
    font-family: 'Pretendard Variable';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`

export const EyeIcon = styled.img`
  position: absolute;
  right: 2.5rem;
  transform: transLateY(60%);
  cursor: pointer;
`
