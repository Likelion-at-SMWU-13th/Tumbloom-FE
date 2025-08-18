import React, { useEffect, useRef } from 'react'
import QrScanner from 'qr-scanner'
import styled from 'styled-components'
import workerUrl from 'qr-scanner/qr-scanner-worker.min.js?url'
import closeIcon from '@/assets/icons/close.svg'
import { useNavigate } from 'react-router-dom'

const VideoArea = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`
const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const SquareBoxArea = styled.div`
  position: absolute;
  width: 14.9375rem;
  height: 14.9375rem;
  border-radius: 1.875rem;
  border: 8px solid #25af94;
  box-shadow: 0 0 0 9999px rgba(6, 52, 40, 0.5);
`

const QrGuideText = styled.div`
  position: absolute;
  color: #fff;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  top: 68%;
  z-index: 2;
`

const CloseBtn = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  flex-shrink: 0;
  z-index: 3;
  top: 3%;
  right: 10%;
  cursor: pointer;
`

QrScanner.WORKER_PATH = workerUrl

function QrScan() {
  const qrVideo = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const scanner = new QrScanner(qrVideo.current, (result) => {
      console.log(result)
    })
    scanner.start()

    return () => scanner.stop()
  }, [])

  const goToHome = () => {
    navigate('/')
  }

  return (
    <>
      <VideoArea onClick={goToHome}>
        <CloseBtn>
          <img src={closeIcon} />
        </CloseBtn>
        <Video ref={qrVideo} playsInline muted autoPlay />
        <SquareBoxArea />
        <QrGuideText>
          카페 키오스크에 부착돼있는
          <br /> QR코드를 스캔해주세요
        </QrGuideText>
      </VideoArea>
    </>
  )
}

export default QrScan
