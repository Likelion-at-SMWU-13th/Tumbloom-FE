import styled from 'styled-components'

export const VideoArea = styled.div`
  display: flex;
  flex-direction: column;
  inset: 0;
  position: relative;
  width: 100%;
  height: 100dvh;
  align-items: center;
  justify-content: center;
  background: #000;
`

export const SquareBoxArea = styled.div`
  position: absolute;
  width: 14.9375rem;
  height: 14.9375rem;
  border-radius: 1.875rem;
  pointer-events: none;
  border: 8px solid #25af94;
  box-shadow: 0 0 0 9999px rgba(6, 52, 40, 0.5);
`

export const QrGuideText = styled.div`
  position: absolute;
  color: #fff;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 1.25rem;
  transform: translateY(2rem);
  font-weight: 600;
  top: 68%;
  z-index: 2;
  pointer-events: none;
`

export const CloseBtn = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  z-index: 3;
  top: 3%;
  right: 10%;
  cursor: pointer;

  img {
    display: block;
  }
`

export const Video = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #000;
`
