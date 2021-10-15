import React from 'react'

const PolicyCard = props => {
    return (
        <div className="policy-card">
            <div className="policy-card__icon">
                <i className={props.icon}></i>
            </div>
            <div className="policy-card__name">
                {props.name}
            </div>
            <div className="policy-card__description">
                {props.description}
            </div>
        </div>
    )
}

export default PolicyCard
