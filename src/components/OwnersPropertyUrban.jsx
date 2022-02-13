import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { propertyOwnersUrban} from '../controllers/controllers'

const OwnersPropertyRural = () => {

    const [ownersProperty,  setOwnersProperty] = useState(null)

    const params = useParams()
    useEffect(()=> {
        propertyOwnersUrban(params.id, setOwnersProperty)
    }, [])

    return (
        <>

            {ownersProperty != null ? (

                ownersProperty.map((ownerProperty => (
                    <div key={ownerProperty.code}>
                        
                        <a href={`/propietario/${ownerProperty.tipe}`}>
                        <table>
                            <tr>
                                <td>{ownerProperty.id_cadastral}</td>
                                <td>{ownerProperty.name}</td>
                                <td>{ownerProperty.tipe}</td>
                            </tr>
                        </table>
                        </a>
                    </div>
                )
                ))) : ('Owners property does not exist')
                }
        </>
    )
}

export default OwnersPropertyRural

