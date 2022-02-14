import React,{useEffect, useState} from 'react'
import { getRuralProperties } from '../controllers/controllers'

const RuralProperties = () => {

    const [ ruralProperties, setRuralProperties] = useState(null)

    useEffect(()=> {
        getRuralProperties(setRuralProperties)
    }, [])

    return (
        <>

            <h2>Administrador de Predios Rurales</h2>

            <table>
                <tr>
                    <th>Codigo</th>
                    <th>Cédula Catastral</th>
                    <th>Matricula inmobiliaria</th>
                    <th>Tipo</th>
                </tr>
            </table>

        { ruralProperties != null ? (

                ruralProperties.map((ruralProperty => (
                    <div key={ruralProperty.code}>
                        
                        <a href={`/predio-rural/${ruralProperty.code}`}>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <td>{ruralProperty.code}</td>
                                <td>{ruralProperty.id_cadastral}</td>
                                <td>{ruralProperty.registration_real_estate}</td>
                                <td>{ruralProperty.tipe}</td>
                            </tr>
                        </a>
                    </div>
                )
                ))) : ('There are no rural Properties')
        }
        </>
    )
}

export default RuralProperties