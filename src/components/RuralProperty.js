import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getRuralProperty } from '../controllers/controllers'
import './owner.css'
const RuralProperty = () => {

    const [ruralProperty, setRuralProperty] = useState(null)

    const params = useParams()
    useEffect(() => {
        getRuralProperty(params.id, setRuralProperty)
    }, [])

    return (
        <>
            {ruralProperty != null ? (
                <section className='section'>
                    <div className='container wrapper'>
                        <div className='cards-body'>
                            <div className='row '>
                                <div className='col-md-6'>
                                    <div className='card shadow cardData'>
                                        <h4 className='text-center bg-light border container-info'>Información del Predio</h4>
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
                                    </div>
                                </div>

                                <div className='col-md-6'>
                                    <div className='card shadow cardData'>
                                        <h4 className='text-center bg-light border container-info'>{`Propietarios`}</h4>
                                        <div>
                                            <p>
                                                {ruralProperty.owners.map(owner =>
                                                    <div>
                                                        <p> - Nombres: {owner.names} / Identificacíon {owner.id_owner} /  Tipo: {owner.tipe_owner}</p>
                                                    </div>)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : ('Property does not exist')}
        </>
    )
}

export default RuralProperty