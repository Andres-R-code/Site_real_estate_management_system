import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getOwner } from '../controllers/controllers'


const PropertyOwnersRural = () => {

    const [owner, setOwners] = useState(null)

    const params = useParams()
    useEffect(()=> {
        getOwner(params.id, setOwners)
    }, [])

    return (
        <>

            <h2>Propietarios del predio</h2>

            <table>
                <tr>
                    <th>Tipo</th>
                    <th>Nombre</th>
                    <th>Identificacion</th>
                </tr>

            </table>

        {owner != null ? (

                owner.map((ownerData => (
                    <div key={owner.code}>
                        
                        <a href={`/propietario/${ownerData.code}`}>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                            <tr>
                                <td>{ownerData.tipe_owner}</td>
                                <td>{ownerData.names}</td>
                                <td>{ownerData.id_owner}</td>
                            </tr>
                        </a>
                    </div>
            )
            ))) : ('There are no owners')
    }
    </>
    )
}

export default PropertyOwnersRural