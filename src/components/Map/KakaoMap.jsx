import React from 'react'
import styled from 'styled-components'
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk'
import sprout from '@/assets/icons/dark-green-sprout.svg'
import myLoc from '@/assets/icons/current-loc.svg'
import { useState } from 'react'
import { useEffect } from 'react'

const MapWrapper = styled.div`
  width: 50rem;
  height: 80rem;
  position: absolute;
  inset: 0;
  z-index: 0;
`

function KakaoMap({ center, isMarker }) {
  const [cafes, setCafes] = useState([])

  const nearbyCafes = async (lat, lng) => {
    const at = localStorage.getItem('accessToken')
    if (!at || at === 'undefined') {
      console.log('로컬스토리지에 accessToken 없음')
      return
    }
    const res = await fetch(`https://tumbloom.store/api/cafes/nearby?lat=${lat}&lng=${lng}`, {
      headers: { Authorization: `Bearer ${at}` },
    })
    const json = await res.json().catch(() => ({}))
    if (!res.ok || !Array.isArray(json?.data)) {
      console.log('nearby error', res.status, json)
      setCafes([])
      return
    }

    setCafes(
      json.data.map((c) => ({
        id: c.id,
        name: c.cafeName,
        lat: c.latitude,
        lng: c.longitude,
      })),
    )
  }

  useEffect(() => {
    if (localStorage.getItem('accessToken') === 'undefined') {
      localStorage.removeItem('accessToken')
    }
    if (center) nearbyCafes(center.lat, center.lng)
  }, [center])

  return (
    <MapWrapper>
      <Map center={center} level={2} style={{ width: '100%', height: '100%' }}>
        {isMarker && (
          <MapMarker
            image={{
              src: myLoc,
              size: { width: 150, height: 150 },
            }}
            position={center}
          ></MapMarker>
        )}
        {cafes.map((c) => (
          <CustomOverlayMap key={c.id} position={{ lat: c.lat, lng: c.lng }} yAnchor={1}>
            <div style={{ transform: 'translate(-50%,-100%)', textAlign: 'center' }}>
              <img src={sprout} alt='sprout' style={{ width: 50, height: 50 }} />
              <div
                style={{
                  padding: '2px 6px',
                  fontSize: 15,
                  fontFamily: 'Cafe24Decoshadow',
                }}
              >
                {c.name}
              </div>
            </div>
          </CustomOverlayMap>
        ))}
      </Map>
    </MapWrapper>
  )
}

export default KakaoMap
