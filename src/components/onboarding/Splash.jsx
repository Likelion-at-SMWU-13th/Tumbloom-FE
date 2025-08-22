import React, { useEffect, useState } from 'react'
import splachImg from '@/assets/images/splash-logo.svg'
import * as S from './Splash.Styled.js'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

function Splash() {
  const navigate = useNavigate()
  const [show, setShow] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1500)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence onExitComplete={() => navigate(`/onb`)}>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <S.SplashContainer>
            <S.Logo src={splachImg} alt='Splash Logo' />
          </S.SplashContainer>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Splash
