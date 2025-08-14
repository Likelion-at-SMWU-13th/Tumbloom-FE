import styled from 'styled-components'
import mainheader_img from '../../assets/images/mainheader_bg.svg'
import mainheader_bg from '../../assets/images/mainheader_bg.png'
import cafeImg from '@/assets/images/cafe-img.png'

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
  font-family: 'Pretendard Variable';
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
  font-family: 'Pretendard Variable';
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
  font-family: 'Pretendard Variable';
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

export const Info = styled.img`
  cursor: pointer;
`

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
  font-family: 'Pretendard Variable';
  margin-top: 0;
  color: #000;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0 0 0.62rem 1.25rem;
`

export const StampArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
`

export const StampCard = styled.img`
  width: 20.91006rem;
  height: 7.875rem;
  flex-shrink: 0;
  align-self: center;
`

export const CafeRecommendWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.88rem;
  gap: 0.63rem;
`

export const CafeRecommendText = styled.h1`
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  padding-left: 1.25rem;
`

export const TapWrapper = styled.div`
  width: 22.0625rem;
  height: 2.0625rem;
  flex-shrink: 0;
  border-radius: 1.9375rem;
  background: #efefef;
  align-self: center;
`

export const TapButton = styled.button`
  width: 11rem;
  height: 2.0625rem;
  flex-shrink: 0;
  border-radius: 1.9375rem;
  cursor: pointer;
  font-family: 'Pretendard Variable';
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 0.72256rem;
  align-items: center;
`

export const StarIcon = styled.img`
  width: 0.75rem;
  height: 0.74969rem;
  flex-shrink: 0;
`

export const CafeCarousel = styled.div`
  margin-top: 0.16rem;
  display: flex;
  justify-content: center;
`

export const CafeCardWrapper = styled.div`
  width: 9.875rem;
  height: 9.25rem;
  border-radius: 0.36725rem;
  cursor: pointer;
`

export const CafeCardImg = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  width: 9.875rem;
  height: 5.73906rem;
  flex-shrink: 0;
  border-radius: 0.36725rem 0.36725rem 0 0;
`

export const BookMark = styled.img`
  margin: 0.76rem 0 0 0.78rem;
  cursor: pointer;
`

export const CafeCardInfo = styled.div`
  border: 0.0737rem solid #f0f0f0;
  border-radius: 0 0 0.36725rem 0.36725rem;
`

export const CafeName = styled.h2`
  width: 3.64781rem;
  height: 1.03419rem;
  flex-shrink: 0;
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 0.57rem 0 0.35rem 0.89rem;
  margin: 0;
`

export const CafeAddress = styled.h3`
  width: 6.799rem;
  height: 0.80438rem;
  flex-shrink: 0;
  color: #767676;
  font-family: 'Pretendard Variable';
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.84913rem; /* 123.508% */
  padding: 0 0 0.75rem 0.89rem;
  margin: 0;
`
export const CardRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
  align-items: center;
  justify-items: center;
`

export const CardContainer = styled.div`
  overflow: hidden;
  background: #fff;
  border: none;
  padding: 0;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
  transition: all 0.2s ease;
`
