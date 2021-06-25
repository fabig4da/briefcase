import React from 'react'
import { getLocalImages } from '../../../helpers/helpers'
const tech = [
    {
        img: 'html',
        color: 'E44D26'
    },
    {
        img: 'js',
        color: 'D6BA32'
    },
    {
        img: 'css',
        color: '0C73B8'
    },
    {
        img: 'react',
        color: '61DAFB'
    },
]
export const Tecnologies = () => {
    return (
        <div className="tec-group">
            <img className="tec-title" src={getLocalImages('tech.png')} alt="Technologies title" />
            <div className="tec-item-content w-100 flex-wrap">
                {
                    tech.map(value => {
                        return (
                            <div className="tec-item">
                                <div className="tec-img-c fov-center">
                                    <img src={getLocalImages(`${value.img}.png`)} alt="react logo" />
                                </div>
                                <div className="tec-item-cover" style={{background: `#${value.color}`}}></div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
