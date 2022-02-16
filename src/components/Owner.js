import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOwner } from '../controllers/controllers'

import OwnersPropertyRural from './OwnersPropertyRural'
import OwnersPropertyUrban from './OwnersPropertyUrban'


import './owner.css'


const Owner = () => {

    const [owner, setOwner] = useState(null)

    const params = useParams()
    useEffect(() => {
        getOwner(params.id, setOwner)
    }, [])

    return (
        <div>
            {owner != null ? (
                <div>
                    <section className='section'>
                        <div className='container wrapper'>
                            <div className='cards-body'>
                                <div className='row '>
                                    <div className='col-md-6'>
                                        <div className='card shadow cardData'>
                                        <h4 className='text-center bg-light border container-info'>Información de Propietario</h4>
                                        <div className='cardList'>
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
                                        </div>
                                    </div>


                                    <div className='col-md-6'>
                                        <div className='card shadow cardData'>
                                            <h4 className='text-center bg-light border container-info'>{`Propiedades de ${owner.names}`}</h4>

                                            
                                            <OwnersPropertyRural />
                                            <OwnersPropertyUrban />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            ) : ('Owner does not exist')
            }
        </div>
    )
}

export default Owner