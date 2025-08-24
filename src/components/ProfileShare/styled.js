import styled from 'styled-components'

export const ProfileCardWrapper = styled.div`
  /* width: 22.0625rem; */
  width: 353px;
  height: 416px;
  /* height: 26rem; */
  flex-shrink: 0;
  border-radius: 0.625rem;
  background: #164239;
  box-shadow: 0 0 2.1px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  position: relative;
`

export const TumberIn = styled.img`
  width: 13rem;
  height: auto;
  position: absolute;
  left: 0.3rem;
  top: 1.5rem;
  transform: translateY(-50%);
`

export const ProfileInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.8rem;
`

export const ProfileImg = styled.img`
  width: 7.1875rem;
  height: 7.1875rem;
  flex-shrink: 0;
  z-index: 1;
`

export const NickName = styled.p`
  color: #fff;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  padding: 0.9rem 0 1rem 0;
`

export const LevelContainer = styled.div`
  border-radius: 15.64569rem;
  background: #deeeeb;
  display: inline-flex;
  padding: 0.5215rem 0.78231rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`

export const LevelName = styled.p`
  color: #005c4a;
  font-family: 'Pretendard Variable';
  font-size: 0.83444rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
`

export const MatrixContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 3rem;
`

//ProfileShareBox.jsx

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #d9d9d9;
  padding-top: 7.5rem;
  flex-direction: column;
`

export const ImgBtn = styled.button`
  width: 9.9375rem;
  height: 2.9375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 24.98356rem;
  background: #25af94;
  border: none;
  color: #fff;
  font-family: 'Pretendard Variable';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 4.5rem;
  cursor: pointer;
`
