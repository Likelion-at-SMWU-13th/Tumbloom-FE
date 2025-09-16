import styled from 'styled-components'
import mainheader_img from '../../assets/images/mainheader_bg.svg'
import mainheader_bg from '../../assets/images/mainheader_bg.png'
import cafeImg from '@/assets/images/cafe-img.png'
import AI_bg from '@/assets/images/preference-bg.svg'

export const Wrapper = styled.div`
  background-image: url(${mainheader_bg});
  background-size: 100% auto;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 310px;
  /* padding-bottom: 90px; */
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
  margin: 0 0 1rem 1.25rem;
`

export const StampArea = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-top: 0.5rem; */
  padding-top: 2rem;
`

export const StampCard = styled.img`
  width: 20.91006rem;
  height: 7.875rem;
  flex-shrink: 0;
  align-self: center;
  position: absolute;
  inset: 0;
`

export const StampBox = styled.div`
  /* display: flex; */
  /* display: inline-block; */
  margin: 0 auto;
  position: relative;
  width: 334.56px;
  height: 126px;
`

export const Stamps = styled.div`
  /* display: flex; */
  justify-content: center;
  position: absolute;
  inset: 0;
`
export const CouponChangeWrapper = styled.div`
  justify-content: center;
  position: absolute;
  inset: 0;
  z-index: 3;
  align-items: center;
  display: flex;
`

export const CafeRecommendWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2.5rem;
  gap: 1rem;
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
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
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
  width: 8.5rem;
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const CafeAddress = styled.h3`
  width: 8.5rem;
  height: 0.80438rem;
  flex-shrink: 0;
  color: #767676;
  font-family: 'Pretendard Variable';
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.84913rem;
  padding: 0 0 0.75rem 0.89rem;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
  border-radius: 0.36725rem;
`

export const Dot = styled.img`
  width: 0.375rem;
  height: 0.375rem;
  flex-shrink: 0;
  gap: 0.3125rem;
`

export const DotsContainer = styled.div`
  display: flex;
  gap: 0.3125rem;
  justify-content: center;
  padding: 1rem 0 0.75rem 0;
`

export const AiRecommendContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const LoadingText = styled.div`
  padding-top: 5rem;
  text-align: center;
  color: #999;
  font-family: 'Pretendard Variable';
`

//TumblerInfo.jsx

export const InfoBackground = styled.div`
  max-width: 100%;
  display: flex;
  position: absolute;
  z-index: 4;
  width: 100%;
  max-width: 440px;
  margin: 0 auto;
  /* width: 24.5625rem; */
  /* height: 53.25rem; */
  background-color: rgba(0, 20, 16, 0.75);
  inset: 0;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 22.0625rem;
  height: 9.0625rem;
  flex-shrink: 0;
  border-radius: 0.9375rem;
  background: #fff;
  padding-bottom: 0.13rem;
  z-index: 5;
`

export const InfoTitleBox = styled.div`
  display: flex;
  align-items: center;
  padding-left: 0.9rem;
  gap: 0.5rem;
  padding-bottom: 0.88rem;
  padding-top: 1.31rem;
`

export const InfoTitleIcon = styled.img`
  width: 0.9rem;
  height: auto;
`

export const InfoTitle = styled.h2`
  color: #ababab;
  font-family: 'Pretendard Variable';
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
`

export const InfoDescBox = styled.div`
  padding-left: 0.9rem;
  padding-bottom: 0.7rem;
`

export const InfoDesc = styled.h2`
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  padding-bottom: 0.69rem;
`

export const HighlightText = styled.span`
  color: #25af94;
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`
//StampComplete.jsx

export const StampComplete = styled.div`
  width: 12.3125rem;
  height: 6rem;
  flex-shrink: 0;
  border-radius: 0.4375rem;
  border: 0.0625rem solid #cecece;
  background: #fff;
`

export const StampCompleteTitle = styled.h2`
  color: #000;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

export const CouponBtn = styled.button`
  display: flex;
  width: 7.8125rem;
  height: 1.88575rem;
  padding: 0.6735rem;
  justify-content: center;
  align-items: center;
  gap: 0.6735rem;
  flex-shrink: 0;
  border-radius: 2.0205rem;
  border: 0.0674rem solid #fff;
  background: #25af94;
  color: #fff;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0 2.25rem 0 2.25rem;
  cursor: pointer;
`

//PreferenceCard.jsx

export const PreferenceCard = styled.div`
  background-image: url(${AI_bg});
  background-repeat: no-repeat;
  width: 22.0625rem;
  height: 9.875rem;
  flex-shrink: 0;
  display: flex;
`

export const CardContent = styled.div`
  margin: 1.4375rem 0 0 1.375rem;
`

export const CardBadge = styled.div`
  display: flex;
  width: 3.6875rem;
  height: 1.125rem;
  padding: 0.1rem 0.2rem;
  justify-content: center;
  align-items: center;
  gap: 0.68963rem;
  flex-shrink: 0;
  border-radius: 0.125rem;
  background: #25af94;
  color: #fff;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 0.5rem;
`

export const CardTitle = styled.h2`
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  margin-bottom: 0.13rem;
`

export const CardSubtitle = styled.h3`
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  margin-bottom: 1.25rem;
`

export const Preferencebtn = styled.button`
  cursor: pointer;
  display: flex;
  width: 8rem;
  height: 1.93106rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 2.06894rem;
  background: #fff;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
  color: #000;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 0.82756rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
`
