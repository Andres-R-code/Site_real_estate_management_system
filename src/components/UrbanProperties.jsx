import React,{useEffect, useState} from 'react'
import { getUrbanProperties } from '../controllers/controllers'

const UrbanProperties = () => {

    const [ urbanProperties, setUrbanProperties] = useState(null)

    useEffect(()=> {
        getUrbanProperties(setUrbanProperties)
    }, [])

    return (
        <>

            <h2>Administrador de Predios Urbanos</h2>

            <table>
                <tr>
                    <th>Codigo</th>
                    <th>Cédula Catastral</th>
                    <th>Matricula inmobiliaria</th>
                    <th>Tipo</th>
                </tr>

            </table>

        { urbanProperties != null ? (

                urbanProperties.map((urbanProperty => (
                    <div key={urbanProperty.code}>
                        
                        <a href={`/predio-urban/${urbanProperty.code}`}>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <td>{urbanProperty.code}</td>
                                <td>{urbanProperty.id_cadastral}</td>
                                <td>{urbanProperty.registration_real_estate}</td>
                                <td>{urbanProperty.tipe}</td>
                            </tr>
                        </a>
                    </div>
                )
                ))) : ('There are no urban Properties')
        }
        </>
    )
}

export default UrbanProperties