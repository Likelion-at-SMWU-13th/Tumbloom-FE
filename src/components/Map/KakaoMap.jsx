import React from 'react'
import styled from 'styled-components'
import { Map } from 'react-kakao-maps-sdk'

const MapWrapper = styled.div`
  width: 50rem;
  height: 80rem;
  position: absolute;
  z-index: 0;
`

function KakaoMap() {
  return (
    <MapWrapper>
      <Map
        center={{ lat: 33.450701, lng: 126.570667 }}
        level={3}
        style={{ width: '100%;', height: '100%' }}
      ></Map>
    </MapWrapper>
  )
}

export default KakaoMap
