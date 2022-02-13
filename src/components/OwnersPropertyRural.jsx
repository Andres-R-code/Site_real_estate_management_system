import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getOwnersPropertyRural } from '../controllers/controllers'

const OwnersPropertyRural = () => {

    const [ownersProperty,  setOwnersProperty] = useState(null)

    const params = useParams()
    useEffect(()=> {
        getOwnersPropertyRural(params.id, setOwnersProperty)
    }, [])

    return (
        <>

            {ownersProperty != null ? (

                ownersProperty.map((ownerProperty => (
                    <div key={ownerProperty.code}>
                        
                        <a href={`/propietario/${ownerProperty.tipe}`}>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                            <tr>
                                <td>{ownerProperty.id_cadastral}</td>
                                <td>{ownerProperty.name}</td>
                                <td>{ownerProperty.tipe}</td>
                            </tr>
                        </a>
                    </div>
                )
                ))) : ('Owners property does not exist')
                }
        </>
    )
}

export default OwnersPropertyRural

