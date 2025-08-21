import React from 'react'
import styled from 'styled-components'
import { Map, MapMarker } from 'react-kakao-maps-sdk'

const MapWrapper = styled.div`
  width: 50rem;
  height: 80rem;
  position: absolute;
  inset: 0;
  z-index: 0;
`

function KakaoMap({ center, isMarker }) {
  return (
    <MapWrapper>
      <Map center={center} level={6} style={{ width: '100%', height: '100%' }}>
        {isMarker && <MapMarker position={center}></MapMarker>}
      </Map>
    </MapWrapper>
  )
}

export default KakaoMap
