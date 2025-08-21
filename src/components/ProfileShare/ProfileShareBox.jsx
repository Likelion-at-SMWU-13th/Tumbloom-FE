import React, { useRef } from 'react'
import html2canvas from 'html2canvas'
import { saveAs } from 'file-saver'
import ProfileCard from './ProfileCard'
import * as S from './styled'

const ProfileShareBox = ({ userName, tumblerCount, savedWater, savedTree, level }) => {
  const cardRef = useRef(null)

  const handleDownload = async () => {
    const el = cardRef.current
    if (!el) return
    if (document.fonts?.ready) {
      try {
        await document.fonts.ready
      } catch {}
    }

    const scale = Math.min(window.devicePixelRatio || 1, 2)
    const canvas = await html2canvas(el, {
      useCORS: true,
      backgroundColor: null,
      scale,
    })

    canvas.toBlob((blob) => {
      if (blob) {
        saveAs(blob, `tumblerIn-profile-card-${Date.now()}.png`)
      } else {
        const url = canvas.toDataURL('image/png')
        const a = document.createElement('a')
        a.href = url
        a.download = `tumblerIn-profile-card-${Date.now()}.png`
        document.body.appendChild(a)
        a.click()
        a.remove()
      }
    }, 'image/png')
  }

  return (
    <S.Wrapper>
      <div ref={cardRef}>
        <ProfileCard
          userName={userName}
          tumblerCount={tumblerCount}
          savedWater={savedWater}
          savedTree={savedTree}
          level={level}
        />
      </div>
      <S.ImgBtn onClick={handleDownload}>이미지 다운받기</S.ImgBtn>
    </S.Wrapper>
  )
}

export default ProfileShareBox
