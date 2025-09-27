import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3.5rem 0 0 0;
`

export const LoginHeader = styled.h1`
  color: #000;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

export const Desc = styled.p`
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 1.38rem 0 0 0;
`

export const GoToRegisterBtn = styled.span`
  color: #25af94;
  font-family: 'Pretendard Variable';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: auto;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
  cursor: pointer;
`

export const LoginErrorText = styled.span`
  color: #f54d4dff;
  font-family: Inter;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 0.94rem 0 0 0;
`
