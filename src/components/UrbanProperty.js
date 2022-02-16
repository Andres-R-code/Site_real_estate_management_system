import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getUrbanProperty } from '../controllers/controllers'
import './owner.css'

const RuralProperty = () => {

    const [urbanProperty, setUrbanProperty] = useState(null)

    const params = useParams()
    useEffect(() => {
        getUrbanProperty(params.id, setUrbanProperty)
    }, [])

    return (
        <>
            {urbanProperty != null ? (
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
                                                <b>Tipo:</b> {urbanProperty.tipe}
                                            </p>
                                            <p>
                                                <b>Cédula Catastral:</b> {urbanProperty.id_cadastral}
                                            </p>
                                            <p>
                                                <b>Matricula inmoviliaria:</b> {urbanProperty.registration_real_estate}
                                            </p>
                                            <p>
                                                <b>Pais:</b> {urbanProperty.country}
                                            </p>
                                            <p>
                                                <b>Departamento:</b> {urbanProperty.department}
                                            </p>
                                            <p>
                                                <b>Ciudad:</b> {urbanProperty.city}
                                            </p>
                                            <p>
                                                <b>Dirección:</b> {urbanProperty.address}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-md-6'>
                                    <div className='card shadow cardData'>
                                        <h4 className='text-center bg-light border container-info'>{`Propietarios`}</h4>
                                        <div>
                                            <p>
                                                {urbanProperty.owners.map(owner =>
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