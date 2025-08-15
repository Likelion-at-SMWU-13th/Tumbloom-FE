import React from 'react'
import CafeImg from '@/assets/images/get-stamp-cafe.png'
import Header from '@/components/common/Header'

function StampAccess() {
  return (
    <div>
      <Header title='스탬프 적립하기' />
      <h1>그린카페에서 텀블러 테이크아웃할게요</h1>
      <p>음료 받을 때 직원에게 화면을 보여주고 확인코드를 받으면 스탬프를 적립해요</p>
      <div>
        <h3>직원확인코드</h3>
        <input placeholder='확인코드 입력'>
          <button>완료</button>
        </input>
      </div>
    </div>
  )
}

export default StampAccess
