import React from 'react'
import sales from '../assets/fake-data/sale'
const Sales = props => {
    return (
        <div className="sale">
            <div className="sale__img">
                <img src={props.img} alt="" />
            </div>
            <div className="sale__button">
                Xem ngay
            </div>
        </div>
    )
}

export default Sales
