import styled from 'styled-components'
import mainheader_img from '../../assets/images/mainheader_bg.svg'
import mainheader_bg from '../../assets/images/mainheader_bg.png'

export const Wrapper = styled.div`
  background-image: url(${mainheader_bg});
  background-size: 100% auto;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 17.5rem;
`

export const GreetingWrapper = styled.div`
  padding: 3rem 0 1.06rem 1.88rem;
`

export const UserName = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
`

export const WelcomeText = styled.h2`
  color: #dafff8;
  font-family: 'Pretendard Variable';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0%;
`

export const Icons = styled.img`
  width: 1.4706rem;
  height: 1.82rem;
  flex-shrink: 0;
`

export const IconBox = styled.div`
  background-color: #fff;
  border-radius: 50%;
  width: 3.24519rem;
  height: 3.24519rem;
  flex-shrink: 0;
  justify-content: center;
  display: flex;
  align-items: center;
`
export const Label = styled.h3`
  color: #dafff8;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  justify-content: center;
  display: flex;
  margin: 0.44rem 0 0;
`

export const Value = styled.h2`
  color: #fff;
  font-size: 1.08175rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  justify-content: center;
  display: flex;
  margin: 0;
`

export const MatrixChip = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Info = styled.img``

export const MatrixBar = styled.div`
  display: flex;
  gap: 1.8rem;
  margin-left: 1.88rem;
`

export const MatrixContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.48rem;
`
export const MyStamp = styled.h2`
  margin-top: 0;
  color: #000;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`
