import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getUrbanProperty } from '../controllers/controllers'

const RuralProperty = () => {
    
    const [ urbanProperty, setUrbanProperty] = useState(null)

    const params = useParams()
    useEffect(()=> {
        getUrbanProperty(params.id ,setUrbanProperty)
    }, [])

    return (
        <>
            <h2>Predio</h2>
            
            {urbanProperty != null ? (

                <div>
                    <div>
                        <p>
                            <b>Código:</b> {params.id}
                        </p>
                        <p>
                            <b>Tipo:</b> {urbanProperty.tipe} 
                        </p>
                        <p>
                            <b>Cédula Catastral:</b> {urbanProperty.id_cadastral} 
                        </p>
                        <p>
                            <b>Matricula inmoviliaria:</b> {urbanProperty.registration_real_estate} 
                        </p>
                        <p>
                            <b>Pais:</b> {urbanProperty.country} 
                        </p>
                        <p>
                            <b>Departamento:</b> {urbanProperty.department} 
                        </p>
                        <p>
                            <b>Ciudad:</b> {urbanProperty.city} 
                        </p>
                        <p>
                            <b>Dirección:</b> {urbanProperty.address} 
                        </p>
                    </div>

                    <div>
                        <h2>Propietarios del predio Urbano</h2>
                        <table>
                            <tr>
                                <th>Tipo</th>
                                <th>Identificacion</th>
                                <th>Nombre</th>
                            </tr>
                        </table>
                        <p>
                            {urbanProperty.owners.map(owner => <div>
                                    <table>
                                        <tr>
                                            <td>{owner.tipe_owner}</td>
                                            <td>{owner.id_owner}</td>
                                            <td>{owner.names}</td>
                                        </tr>
                                    </table>
                            </div>)}
                        </p>
                    </div>
                </div>
            ) : ('Property does not exist')}
        </>
    )
}

export default RuralProperty