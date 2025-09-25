import * as S from './Map.Styled.js'

function MapBtn({ img, name, onClick, isActive }) {
  return (
    <S.Btn
      onClick={onClick}
      style={{
        backgroundColor: isActive ? '#25AF94' : '#fff',
      }}
    >
      <S.BtnImg src={img} />
      <S.BtnText style={{ color: isActive ? '#fff' : '#000' }}>{name}</S.BtnText>
    </S.Btn>
  )
}

export default MapBtn
