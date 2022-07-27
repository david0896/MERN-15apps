import styled from '@emotion/styled'

const Resultado = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 30px;
`
const Imagen = styled.img`
    display: block;
    width: 120px;
`

const Texto = styled.p`
    font-size:18px;
    span{
        font-weight: 700;
    }
`

const Precio = styled.p`
    font-size:22px;
    span{
        font-weight: 700;
    }
`

const Resut = ({cotizacion}) => {

  const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = cotizacion;

  return (
    <Resultado>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen de Criptomoneda" />
        <div>
            <Precio>El precio es del día <span>{PRICE}</span></Precio>
            <Texto>El precio más alto del día <span>{HIGHDAY}</span></Texto>
            <Texto>El precio más bajo del día <span>{LOWDAY}</span></Texto>
            <Texto>Variación últimas 24Hrs <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Última actualización <span>{LASTUPDATE}</span></Texto>
        </div>
    </Resultado>
  )
}

export default Resut