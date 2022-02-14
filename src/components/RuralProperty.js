import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getRuralProperty } from '../controllers/controllers'
import './owner.css'
const RuralProperty = () => {
    
    const [ ruralProperty, setRuralProperty] = useState(null)

    const params = useParams()
    useEffect(()=> {
        getRuralProperty(params.id ,setRuralProperty)
    }, [])

    return (
        <>
            <h2>Predio</h2>
            
            {ruralProperty != null ? (

                <div>
                    <div className='cardList'>
                        <p>
                            <b>Código:</b> {params.id}
                        </p>
                        <p>
                            <b>Tipo:</b> {ruralProperty.tipe} 
                        </p>
                        <p>
                            <b>Cédula Catastral:</b> {ruralProperty.id_cadastral} 
                        </p>
                        <p>
                            <b>Matricula inmoviliaria:</b> {ruralProperty.registration_real_estate} 
                        </p>
                        <p>
                            <b>Nombre:</b> {ruralProperty.name} 
                        </p>
                        <p>
                            <b>Pais:</b> {ruralProperty.country} 
                        </p>
                        <p>
                            <b>Departamento:</b> {ruralProperty.department} 
                        </p>
                    </div>

                    <div>
                        <h2>Propietarios del rural</h2>
                        <table>
                            <tr>
                                <th>Tipo</th>
                                <th>Identificacion</th>
                                <th>Nombre</th>
                            </tr>
                        </table>
                        <p>
                            {ruralProperty.owners.map(owner => <div>
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