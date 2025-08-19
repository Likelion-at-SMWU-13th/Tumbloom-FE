import styled from 'styled-components'

export const ProfileContentBox = styled.div`
  width: 24.5625rem;
  height: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;
`

export const ProfileImg = styled.img`
  width: 7.14125rem;
  height: 7.1875rem;
  flex-shrink: 0;
`

export const ProfileName = styled.p`
  color: #000;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  padding: 0.94rem 0 0.8rem;
`

export const ProfileLevelBox = styled.div`
  width: 8.5rem;
  height: 2.1rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 15.64569rem;
  background: #deeeeb;
`

export const ProfileLevel = styled.span`
  color: #005c4a;
  font-family: 'Pretendard Variable';
  font-size: 0.83444rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
`

export const QuestionIcon = styled.img`
  padding-left: 0.25rem;
  cursor: pointer;
`

export const LevelTextContainer = styled.div`
  display: flex;
  gap: 5.7rem;
`

export const LevelState = styled.span`
  color: #000;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

export const NextLevel = styled.span`
  color: #979797;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const StateBarContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  padding: 1.14rem 0 0.56rem 0;
`

export const StateBar = styled.div`
  width: 22.0625rem;
  height: 0.625rem;
  flex-shrink: 0;
  border-radius: 18.75rem;
  background: #d9d9d9;
`

export const CurrentStateBar = styled.div`
  width: 5.375rem;
  height: 0.625rem;
  flex-shrink: 0;
  border-radius: 18.75rem;
  background: #25af94;
  position: absolute;
  align-items: flex-start;
`

//ProfileInfo.jsx

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  padding-top: 1rem;
`

export const CurrentCountBox = styled.div`
  width: 22.0625rem;
  height: 6.75rem;
  flex-shrink: 0;
  border-radius: 1.25rem;
  border: 1px solid #deeeeb;
  background: #fff;
`

export const CafePreferenceBox = styled.div`
  width: 22.0625rem;
  height: 6.625rem;
  flex-shrink: 0;
  border-radius: 1.25rem;
  border: 1px solid #deeeeb;
  background: #fff;
  display: flex;
  flex-direction: row;
  cursor: pointer;
`

export const CouponCafeBox = styled.div`
  height: 8.6875rem;
  width: 22.0625rem;
  display: flex;
  flex-direction: row;
  gap: 0.81rem;
`

export const Title = styled.span`
  color: #898a8d;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
  padding-left: 1.56rem;
`

export const TumblerCount = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  width: 22.0625rem;
  height: 3.37rem;
  align-items: center;
  gap: 8.2rem;
`

export const CouponCount = styled.div`
  display: flex;
  margin: 0;
  width: 22.0625rem;
  height: 3.37rem;
  align-items: center;
  gap: 9.01rem;
`

export const Value = styled.p`
  margin: 0;
  color: #25af94;
  font-family: 'Pretendard Variable';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

export const Line = styled.img`
  position: absolute;
`

export const PreferenceValue = styled.span`
  color: #005c4a;
  font-family: Inter;
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-left: 0.37rem;
`

export const PreferenceBox = styled.div`
  display: flex;
  align-items: center;
`

export const Arrow = styled.img`
  width: 1.3125rem;
  height: 1.3125rem;
  flex-shrink: 0;
  padding-top: 0.15rem;
`

export const PreferenceValueBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 5.75rem;
`

export const Check = styled.img`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`

export const TextBox = styled.div`
  display: flex;
  align-items: baseline;
  padding-bottom: 0.31rem;
`

//MyPage.jsx

export const Box = styled.div`
  width: 10.625rem;
  height: 8.6875rem;
  flex-shrink: 0;
  border-radius: 1.25rem;
  border: 1px solid #deeeeb;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.38rem;
  box-sizing: border-box;
  cursor: pointer;
`

export const BoxTitle = styled.p`
  color: #898a8d;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
  padding: 0.56rem 0 0.13rem 0;
`

export const BoxValue = styled.p`
  color: #000;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
`

//LevelModal.jsx

export const LevelModalWrapper = styled.div`
  width: 22.0625rem;
  height: 15.375rem;
  flex-shrink: 0;
  border-radius: 0.9375rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
`

export const LevelTitle = styled.p`
  color: #ababab;
  font-family: 'Pretendard Variable';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  padding-bottom: 1.56rem;
`

export const LevelBox = styled.div`
  height: 9.75rem;
  width: 3rem;
  padding-right: 1.5rem;
`

export const Level = styled.p`
  font-family: 'Pretendard Variable';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2rem;
  margin: 0;
`

export const LevelNameBox = styled.div`
  padding-right: 2.5rem;
`

export const LevelName = styled.p`
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem;
  margin: 0;
`

export const LevelCount = styled.p`
  color: #9bc0b9;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2rem;
  margin: 0;
  text-align: end;
`
