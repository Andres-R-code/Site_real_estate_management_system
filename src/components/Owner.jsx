import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getOwner } from '../controllers/controllers'

import OwnersPropertyRural from './OwnersPropertyRural'
import OwnersPropertyUrban from  './OwnersPropertyUrban'


const Owner = () => {

    const [owner, setOwner] = useState(null)

    const params = useParams()
    useEffect(()=> {
        getOwner(params.id, setOwner)
    }, [])

    return (
        <>
            <h2>Propietario</h2>
            {owner != null ? (

                <div>
                    <div>
                    <p>
                        <b>Código:</b> {params.id}
                    </p>
                    <p>
                        <b>Tipo:</b> {owner.tipe_owner} 
                    </p>
                    <p>
                        <b>Identificación:</b> {owner.id_owner} 
                    </p>
                    <p>
                        <b>Nombre:</b> {owner.names} 
                    </p>
                    <p>
                        <b>Apellido:</b> {owner.last_name} 
                    </p>
                    <p>
                        <b>Correo:</b> {owner.email} 
                    </p>
                    <p>
                        <b>Pais:</b> {owner.country} 
                    </p>
                    <p>
                        <b>Departamento:</b> {owner.department} 
                    </p>
                    <p>
                        <b>Ciudad:</b> {owner.city} 
                    </p>
                    <p>
                        <b>Dirección:</b> {owner.address} 
                    </p>
                    </div>

                    <div>
                        <h2>{`Predios a nombre ${owner.names}`}</h2>

                        <table>
                            <tr>
                                <th>Cedula catastral</th>
                                <th>Nombre/dirección</th>
                                <th>tipo</th>
                            </tr>
                        </table>
                        <OwnersPropertyRural/>
                        <OwnersPropertyUrban/>
                    </div>
                </div>
            ) : ('Owner does not exist')
            }
        </>
    )
}

export default Owner