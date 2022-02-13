import React,{useEffect, useState} from 'react'
import { getOwners } from '../controllers/controllers'

const Propietarios = () => {

    const [owners, setOwners] = useState(null)

    useEffect(()=> {
        getOwners(setOwners)
    }, [])

    return (
        <>

            <h2>Administrador de Propietarios</h2>

            <table>
                <tr>
                    <th>Tipo</th>
                    <th>Nombre</th>
                    <th>Identificacion</th>
                </tr>

            </table>

        {owners != null ? (

                owners.map((owner => (
                    <div key={owner.code}>
                        
                        <a href={`/propietario/${owner.code}`}>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                            <tr>
                                <td>{owner.tipe_owner}</td>
                                <td>{owner.names}</td>
                                <td>{owner.id_owner}</td>
                            </tr>
                        </a>
                    </div>
                )
                ))) : ('There are no owners')
        }
        </>
    )
}

export default Propietarios