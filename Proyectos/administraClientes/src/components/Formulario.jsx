import {Formik, Form, Field, ErrorMessage} from 'formik'
import {useNavigate} from 'react-router-dom'
import * as Yup from 'yup'
import Alerta from './Alerta'

const Formulario = ({cliente}) => {

    //* redireccionar 
    const navigate = useNavigate()

    //* validaciones de formulario con YUP
    const nuevoClienteSchema = Yup.object().shape({
        nombre: Yup.string()
                    .min(3, 'Se requiere minimo 3 caracteres')
                    .max(20, 'Exede el limite de caracteres')
                    .required('Campo requerido'),
        empresa: Yup.string()
                    .required('Campo requerido'),
        email: Yup.string()
                    .max(40, 'Exede el limite de caracteres')
                    .min(10, 'Se requiere minimo 3 caracteres')
                    .email('E-mail no valido')
                    .required('Campo requerido'),
        telefono: Yup.number().typeError('El numero no es valido')
                     .integer('Solo se acepta numeros enteros')
                     .positive('No se acepta numeros negativos'),
    })

    const handleSubmit = async (values) =>{
        try {
            const url = 'http://localhost:4000/clientes';
            const confPetition = {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json' 
                }
            }
            const respuesta = await fetch(url, confPetition);
            console.log(respuesta)

            const resultado = await respuesta.json();
            console.log(resultado)

            navigate('/clientes')

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div 
            className=' bg-white mt-10 px-5 py-10 rounded-md shadow-md md: w-3/4 mx-auto'
        >
            <h1
                className=' text-gray-600 font-bold text-xl uppercase text-center'
            >{cliente?.nombre ? 'Editar cliente' : 'Agregar cliente'}</h1>

            <Formik
                initialValues={{
                    //nombre:'',
                    nombre: cliente?.nombre ?? '', //* evalua que la propiedad del objeto exista y si no devuelve undefined, lo que devuelva es evaluedo por ?? para colocar "" en caso de no existir ninguna propiedad seteada
                    empresa: cliente?.empresa ?? '',
                    email: cliente?.email ?? '',
                    telefono: cliente?.telefono ?? '',
                    notas: cliente?.notas ?? '',
                }}

                enableReinitialize= {true} //*prop utilizado para poder releer valores iniciales

                onSubmit={async (values, {resetForm}) => {
                    await handleSubmit(values);
                    resetForm();
                }}
                validationSchema={nuevoClienteSchema}
            >
                {({errors, touched})=>{

                    //console.log(errors);

                    return(
                        <Form
                            className=' mt-10'
                        >
                            <div 
                                className=' mb-4'
                            >
                                <label 
                                    htmlFor='nombre'
                                    className=' text-gray-800'
                                >Nombre:</label>
                                <Field
                                    id='nombre'
                                    type='text'
                                    className='mt-2 block w-full p-3 bg-gray-50'
                                    placeholder='Nombre del cliente'
                                    name='nombre'
                                />
                                <ErrorMessage name='nombre'/>
                            </div>
                            <div 
                                className=' mb-4'
                            >
                                <label 
                                    htmlFor='empresa'
                                    className=' text-gray-800'
                                >Empresa:</label>
                                <Field
                                    id='empresa'
                                    type='text'
                                    className='mt-2 block w-full p-3 bg-gray-50'
                                    placeholder='Empresa del cliente'
                                    name='empresa'
                                />
                                {errors.empresa && touched.empresa ? (<Alerta>{errors.empresa}</Alerta>) : null}
                            </div>
                            <div 
                                className=' mb-4'
                            >
                                <label 
                                    htmlFor='email'
                                    className=' text-gray-800'
                                >E-mail:</label>
                                <Field
                                    id='email'
                                    type='email'
                                    className='mt-2 block w-full p-3 bg-gray-50'
                                    placeholder='Email del cliente'
                                    name='email'
                                />
                                {errors.email && touched.email ? (<Alerta>{errors.email}</Alerta>) : null}
                            </div>
                            <div 
                                className=' mb-4'
                            >
                                <label 
                                    htmlFor='telefono'
                                    className=' text-gray-800'
                                >Telefono:</label>
                                <Field
                                    id='telefono'
                                    type='tel'
                                    className='mt-2 block w-full p-3 bg-gray-50'
                                    placeholder='Telefono del cliente'
                                    name='telefono'
                                />
                                {errors.telefono && touched.telefono ? (<Alerta>{errors.telefono}</Alerta>) : null}
                            </div>
                            <div 
                                className=' mb-4'
                            >
                                <label 
                                    htmlFor='notas'
                                    className=' text-gray-800'
                                >Notas:</label>
                                <Field
                                    as='textarea'
                                    id='notas'
                                    type='text'
                                    className='mt-2 block w-full p-3 bg-gray-50 h-40'
                                    placeholder='Notas del cliente'
                                    name='notas'
                                />
                            </div>
                            <input 
                                type="submit" 
                                value={cliente?.nombre ? 'Editar cliente' : 'Agregar cliente'} 
                                className=' mt-5 bg-blue-800 w-full p-3 text-white font-bold uppercase text-lg'
                            />
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

Formulario.defaultProps= {
    cliente: {}
}

export default Formulario