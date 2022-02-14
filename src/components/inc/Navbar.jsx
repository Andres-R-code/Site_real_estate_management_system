import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar-dark bg-dark shandow'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>

                    <nav class="navbar navbar-expand-lg">
                        <div class="container-fluid">
                        
                            <Link to="/" class="navbar-brand" href="/">ARkandha</Link>

                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                        <Link to="/" class="nav-link" href="/">Inicio</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to="/propietarios" class="nav-link" href="/">Propietarios</Link>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <Link to="/" class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Predios
                                        </Link>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a class="dropdown-item" href="/predios-rurales">Rural</a></li>
                                            <li><a class="dropdown-item" href="/predios-urbanos">Urbano</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" target="_blank" rel='noreferrer' href="https://arkandha.com/nosotros/">Nosotros</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" target="_blank" rel='noreferrer' href="https://arkandha.com/contacto/">Contacto</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" target="_blank" rel='noreferrer' href="https://arkandha.com/actualidad/">Actualidad</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar;