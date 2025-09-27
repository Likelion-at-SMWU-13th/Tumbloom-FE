import React, { useEffect, useState, useRef } from 'react'
import QrScanner from 'qr-scanner'
import { useNavigate } from 'react-router-dom'
import closeIcon from '@/assets/icons/close.svg'
import * as S from '@/components/QrScan/QrScan.Styled'

export default React.memo(function Qrcode(props) {
  const navigate = useNavigate()

  const [qrError, setQrError] = useState(false)
  const videoRef = useRef(null)
  const scannerRef = useRef(null)
  const handledRef = useRef(false)

  // 문자열이 URL 형태인지 간단히 확인
  const isUrl = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g
    return urlRegex.test(text)
  }

  // QR코드가 읽혔을 때 실행되는 함수
  const handleScan = (data) => {
    if (data) {
      const url = data.data

      // 주소 형식이면 그대로, 아니면 앞에 https://를 붙여서 새 창으로 열기
      if (isUrl(url)) {
        window.open(url, '_blank')
      } else {
        window.open(`https://${url}`, '_blank')
      }
    }
  }

  // 현재 켜져 있는 카메라를 완전히 끄고 기기에서 카메라 사용을 끝냄
  const stopCameraTracks = () => {
    const stream = videoRef.current?.srcObject
    if (stream && typeof stream.getTracks === 'function') {
      stream.getTracks().forEach((t) => t.stop())
    }
  }

  // QR 인식기와 카메라 둘 다 완전히 끄는 함수
  const disposeScanner = () => {
    const scanner = scannerRef.current
    try {
      scanner?.stop?.()
      scanner?.destroy?.()
    } catch (_) {}
    scannerRef.current = null
    stopCameraTracks()
  }

  // 닫기 버튼을 눌렀을 때 실행
  const handleClose = () => {
    disposeScanner()
    navigate(-1) // 이전 화면으로 돌아가기
  }

  // QR 인식기 설정 (후면 카메라 사용 등)
  const QrOptions = {
    preferredCamera: 'environment',
    maxScansPerSecond: 5,
    highlightScanRegion: false,
    highlightCodeOutline: false,
  }

  // 화면이 처음 열렸을 때 한 번 실행
  useEffect(() => {
    let mounted = true
    handledRef.current = false

    // 기기에 카메라가 있는지 먼저 확인
    QrScanner.hasCamera().then((hasCamera) => {
      if (!mounted) return
      if (!hasCamera) {
        setQrError(true) // 카메라가 없으면 안내 문구 보여줌
        return
      }

      const videoElem = videoRef.current
      if (!videoElem) return

      const qrScanner = new QrScanner(videoElem, handleScan, QrOptions)
      scannerRef.current = qrScanner

      // 카메라 켜기 시도
      try {
        qrScanner.start()
      } catch {
        if (mounted) setQrError(true) // 실패하면 안내 문구
      }
    })

    // 화면을 벗어나거나 뒤로가기로 나갈 때 카메라 끄기
    return () => {
      mounted = false
      disposeScanner() // 브라우저 '이전' 시에도 안전하게 정리
    }
  }, [])

  return (
    <main id='qrcode' style={{ width: '100%', height: '100%' }}>
      {}
      {!qrError && (
        <S.VideoArea>
          <S.CloseBtn>
            <img src={closeIcon} onClick={handleClose} />
          </S.CloseBtn>
          <S.Video ref={videoRef} playsInline muted autoPlay />
          <S.SquareBoxArea />
          <S.QrGuideText>
            {' '}
            카페 키오스크에 부착돼있는
            <br /> QR코드를 스캔해주세요
          </S.QrGuideText>
        </S.VideoArea>
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
