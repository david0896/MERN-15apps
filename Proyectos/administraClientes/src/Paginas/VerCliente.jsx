import {useParams} from 'react-router-dom'

const VerCliente = () => {

    const {id} = useParams();
    console.log(id)

    return (
        <div>VerCliente</div>
    )
}

export default VerCliente