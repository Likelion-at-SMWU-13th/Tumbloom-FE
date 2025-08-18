import styled from 'styled-components'

export const ModalBackground = styled.div`
  max-width: 100%;
  display: flex;
  position: absolute;
  z-index: 4;
  width: 24.5625rem;
  height: 53.25rem;
  background-color: rgba(0, 20, 16, 0.75);
  inset: 0;
  align-items: center;
  justify-content: center;
`

export const ModalWrapper = styled.div`
  width: 22.0625rem;
  height: 15.3125rem;
  flex-shrink: 0;
  border-radius: 0.9375rem;
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const ModalImage = styled.img`
  width: 4.375rem;
  height: 4.375rem;
  flex-shrink: 0;
  padding-bottom: 0.5rem;
`

export const TextContainer = styled.div`
  margin-bottom: 1.12rem;
`

export const Title = styled.p`
  color: #000;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  padding-bottom: 0.44rem;
`

export const SubTilte = styled.p`
  color: #ababab;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
`

export const BtnContainer = styled.div`
  display: flex;
  gap: 0.88rem;
`

export const Button = styled.button`
  display: flex;
  width: 8.6rem;
  height: 2.9rem;
  justify-content: center;
  align-items: center;
  gap: 0.83281rem;
  border-radius: 24.98356rem;
  background: #deeeeb;
  border: none;
  cursor: pointer;
  color: #005c4a;
  font-family: 'Pretendard Variable';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
