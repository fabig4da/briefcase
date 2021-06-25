import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import images from '../../../assets/images/logo.png';

export const Header = () => {
    const [item] = useState([
        'Templates',
        'Skills',
        'Works',
        'About me'
    ])
    const menu = useRef()
    const handleMenu = ()=>{
        menu.current.classList.toggle('nav-in')
    }
    return (
        <header className="header fov-center">
            <Link to='/' > 
                <img className="logo" src={images} alt="logo"/>
            </Link>
            <nav className="nav fov-center" ref={menu}>
                {item.map(val=>(
                    <Link id="S" key={val}>{val}</Link>
                ))}
                
            </nav>
            <span className='mbtn' onClick={handleMenu}>

            </span>
        </header>
    )
}
