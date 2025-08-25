import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100dvh;
`

export const TopImage = styled.div`
  width: 24.5625rem;
  height: 20rem;
  flex-shrink: 0;
  position: relative;
`

export const BgImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`

export const ImgEffect = styled.div`
  position: absolute;
  transform: translateY(1.5rem);
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.55) 55%,
    #fff 85%
  );
`

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  inset: 0;
  position: absolute;
  align-items: center;
  justify-content: flex-start;
  padding-top: 18.5rem;
`

export const Title = styled.span`
  padding-bottom: 0.94rem;
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  text-align: center;
`
export const CafeName = styled.span`
  color: #25af94;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 2.275rem */
`
export const Desc = styled.span`
  color: #767676;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  padding-top: 0.3rem;
`
export const AccessCodeBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
`
export const AccessCodeHeader = styled.span`
  color: #000;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 7.63rem 0 1.5rem;
`
export const InputField = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 3.3rem;
`

export const CodeInput = styled.input`
  width: 16.4375rem;
  height: 3.0625rem;
  flex-shrink: 0;
  border-radius: 0.3125rem;
  background: #e9f4f2;
  border: none;
  padding-left: 1.12rem;
  color: #005c4a;
  font-family: Inter;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  outline: none;

  &::placeholder {
    color: #b1cac5;
    font-family: 'Pretendard Variable';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  &.error {
    color: #c00000;
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border-radius: 0.3125rem;
    background: #ffe4e4;
  }
`
export const CompleteBtn = styled.button`
  width: 3.125rem;
  height: 2.8125rem;
  flex-shrink: 0;
  border-radius: 0.3125rem;
  opacity: 0.6;
  background: #fff;
  color: #767676;
  font-family: 'Pretendard Variable';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  right: 3.3rem;
  position: relative;
  transform: translateY(0.17rem);
  border: none;
  cursor: pointer;
`

export const ErrorText = styled.span`
  color: #c00000;
  text-align: center;
  font-family: Inter;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 0.94rem 0 0 0;
`
