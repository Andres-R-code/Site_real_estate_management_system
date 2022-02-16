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

                        <div>
                            <p> - Nombres: {ownerProperty.name} / Cédula {ownerProperty.id_cadastral}</p>
                        </div>
                        </a>
                    </div>
                )
                ))) : ('Owners property does not exist')
                }
        </>
    )
}

export default OwnersPropertyRural

