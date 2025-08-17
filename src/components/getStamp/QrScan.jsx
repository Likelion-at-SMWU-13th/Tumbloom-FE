import React from 'react'
import { QrReader } from 'react-qr-reader'
import styled from 'styled-components'
import { useState } from 'react'

const QrBox = styled.div`
  width: 15rem;
  height: 15rem;
  border: 1px solid black;
  position: relative;
  overflow: hidden;
`

function QrScan() {
  return (
    <div>
      <div>QR 스캔하기</div>
      <QrBox>
        <QrReader
          constraints={{ facingMode: 'environment' }}
          onResult={() => {}}
          containerStyle={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
          videoStyle={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </QrBox>
    </div>
  )
}

export default QrScan
