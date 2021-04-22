import React from 'react'
import { getLocalImages } from '../../../helpers/helpers'

export const Templates = () => {
    return (
        <div className="templetes fov-center w-100">
            <div className=" tp-title w-80">
                <h2>Templates</h2>
            </div>
            <div className="templetes-content flex-wrap gap">
                <div className="tp-img">
                    <img src={getLocalImages('t1.png').default} alt="" />
                    <div className="tp-img-cover fov-center">
                        <h3>Title</h3>
                        <button className="btn">Go</button>
                    </div>
                </div>
                <div className="tp-img">
                    <img src={getLocalImages('t2.png').default} alt="" />
                    <div className="tp-img-cover fov-center">
                        <h3>Title</h3>
                        <button className="btn">Go</button>
                    </div>
                </div>
                <div className="tp-img">
                    <img src={getLocalImages('t3.png').default} alt="" />
                    <div className="tp-img-cover fov-center">
                        <h3>Title</h3>
                        <button className="btn">Go</button>
                    </div>
                </div>
                <div className="tp-img">
                    <img src={getLocalImages('t4.png').default} alt="" />
                    <div className="tp-img-cover fov-center">
                        <h3>Title</h3>
                        <button className="btn">Go</button>
                    </div>
                </div>

            </div>
        </div>
    )
}