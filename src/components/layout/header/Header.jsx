import React from 'react'
import { Link } from 'react-router-dom'
import images from '../../../assets/images/logo.png';

export const Header = () => {
    return (
        <header className="header fov-center">
            <Link to='/' > 
                <img className="logo" src={images} alt="logo"/>
            </Link>
            <nav className="nav fov-center">
                <Link>Publicaciones</Link>
                <Link>Videos</Link>
                <Link>Lenguajes</Link>
                <Link>paginas</Link>
                <Link>Contacto</Link>
                <Link>Yo</Link>
            </nav>
        </header>
    )
}
