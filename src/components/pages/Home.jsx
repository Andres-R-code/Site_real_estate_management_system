import React from 'react'
import { Link } from 'react-router-dom'
import urbanIcon from '../img/urban icon.png'
import ruralIcon from '../img/rural icon.png'
import ownerIcon from '../img/owner icon.png'
import './home.css'


const Home = () => {


    return (
        <div className='container'>

            <div>
                <section className='section border-top'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12 mb-4 text-center'>
                                <h3 className='main-heading'>Sistema de registro y administración</h3>
                                <div className='underline mx-auto'></div>
                            </div>

                            <div className='col-md-4'>
                                <div className='card shadow'>
                                    <h6 className='text-style'>Propietarios</h6>
                                            <div className='underline'></div>
                                        <div className='card-body'>
                                        <Link to="/propietarios">
                                        <img src={ownerIcon} className='w-100 boder-botton img' alt="Propietarios"/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card shadow'>
                                    <h6 className='text-style'>Predios rurales</h6>
                                            <div className='underline'></div>
                                        <div className='card-body'>
                                        <Link to="/predios-rurales">
                                        <img src={ruralIcon} className='w-100 boder-botton img' alt="Propietarios"/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card shadow'>
                                    <h6 className='text-style'>Predios urbanos</h6>
                                            <div className='underline'></div>
                                        <div className='card-body'>
                                        <Link to="/predios-urbanos">
                                        <img src={urbanIcon} className='w-100 boder-botton img' alt="Propietarios"/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>
        </div>
    )
}

export default Home