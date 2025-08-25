import React, { useEffect, useState, useRef } from 'react'
import QrScanner from 'qr-scanner'
import styled from 'styled-components'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import closeIcon from '@/assets/icons/close.svg'

const VideoArea = styled.div`
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

const SquareBoxArea = styled.div`
  position: absolute;
  width: 14.9375rem;
  height: 14.9375rem;
  border-radius: 1.875rem;
  pointer-events: none;
  border: 8px solid #25af94;
  box-shadow: 0 0 0 9999px rgba(6, 52, 40, 0.5);
`

const QrGuideText = styled.div`
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

const CloseBtn = styled.button`
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

const Video = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #000;
`

export default React.memo(function Qrcode(props) {
  const navigate = useNavigate()

  const goToHome = () => {
    navigate('/home')
  }
  const [qrError, setQrError] = useState(false)
  const videoRef = useRef(null)
  const scannerRef = useRef(null)
  const handledRef = useRef(false)

  const isUrl = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g
    return urlRegex.test(text)
  }

  const handleScan = (data) => {
    if (data) {
      const url = data.data
      if (isUrl(url)) {
        window.open(url, '_blank')
      } else {
        window.open(`https://${url}`, '_blank')
      }
    }
  }

  const stopCameraTracks = () => {
    const stream = videoRef.current?.srcObject
    if (stream && typeof stream.getTracks === 'function') {
      stream.getTracks().forEach((t) => t.stop())
    }
  }

  const disposeScanner = () => {
    const scanner = scannerRef.current
    try {
      scanner?.stop?.() // v1.x는 동기 함수 → catch 필요 없음
      scanner?.destroy?.()
    } catch (_) {}
    scannerRef.current = null
    stopCameraTracks()
  }

  // const handleClose = () => {
  //   scannerRef.current?.stop().catch(() => {})
  //   scannerRef.current?.destroy()
  //   videoRef.current?.srcObject?.getTracks?.().forEach((t) => t.stop())
  //   navigate(-1)
  // }

  const handleClose = () => {
<<<<<<< HEAD
    console.log(scannerRef)
    scannerRef.current?.stop().catch(() => {})
    scannerRef.current?.destroy()
    videoRef.current?.srcObject?.getTracks?.().forEach((t) => t.stop())
=======
    disposeScanner()
>>>>>>> 600efd944b92a809ccde3c1123c89dccb19bc887
    navigate(-1)
  }

  const QrOptions = {
    preferredCamera: 'environment',
    maxScansPerSecond: 5,
    highlightScanRegion: false,
    highlightCodeOutline: false,
  }

  useEffect(() => {
    let mounted = true
    handledRef.current = false

    QrScanner.hasCamera().then((hasCamera) => {
      if (!mounted) return
      if (!hasCamera) {
        setQrError(true)
        return
      }

      const videoElem = videoRef.current
      if (!videoElem) return

      const qrScanner = new QrScanner(videoElem, handleScan, QrOptions)
      scannerRef.current = qrScanner

      try {
        qrScanner.start()
      } catch {
        if (mounted) setQrError(true)
      }

      // qrScanner.start().catch(() => mounted && setQrError(true))
    })
    // return () => {
    //   mounted = false
    //   if (scannerRef.current) {
    //     scannerRef.current.stop().catch(() => {})
    //     scannerRef.current.destroy()
    //     scannerRef.current = null
    //   }
    // }
    return () => {
      mounted = false
      disposeScanner() // 브라우저 '이전' 시에도 안전하게 정리
    }
  }, [])

  return (
    <main id='qrcode' style={{ width: '100%', height: '100%' }}>
      {}
      {!qrError && (
        <VideoArea>
          <CloseBtn>
            <img src={closeIcon} onClick={handleClose} />
          </CloseBtn>
          <Video ref={videoRef} playsInline muted autoPlay />
          <SquareBoxArea />
          <QrGuideText>
            {' '}
            카페 키오스크에 부착돼있는
            <br /> QR코드를 스캔해주세요
          </QrGuideText>
        </VideoArea>
      )}
      {}
      {qrError && (
        <div className='no-qr'>
          <p>실행할 수 없음</p>
          <small>
            카메라가 작동하지 않는다면 휴대기기의
            <br />
            카메라(QR리더기)를 직접 작동시켜 주세요.
          </small>
        </div>
      )}
    </main>
  )
})
