import React, {useEffect, useState } from 'react';
import { getLocalImages } from '../../../../helpers/helpers';
import './styles.scss';

export const PerfilCard = () => {
    const [show, setShow] = useState(false);

    const hide = ()=>{
        setShow(false)
    }

    useEffect(() => {
        setTimeout(()=>setShow(true), 2000)
    }, [])
    
    return (
        <>
            {
                show &&
                < div className="pc-container">
                    <div className="card-perfil">
                        <div className="cp-header w-100">
                            <i className="fas fa-times" onClick={hide}></i>
                        </div>
                        <div className="cp-body w-100">
                            <img src={getLocalImages('perfil.png')} alt="" />
                            <h3>Cesar Gabian Garces</h3>
                            <h4>System Ingeneer</h4>
                            <h5>Full Stack Web Developer</h5>
                            <button className="btcp">Contact Me</button>
                        </div>

                    </div>

                </div>
            }
        </>
    )
}
