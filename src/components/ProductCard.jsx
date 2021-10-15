import React from 'react'
import { Link } from 'react-router-dom'
const ProductCard = props => {
    return (
        <div className="product-card">
            <Link to={`/catalog/${props.slug}`}>
                <div className="product-card__img">
                    <img src={props.img01} alt="" />
                    <img src={props.img02} alt="" />
                </div>
            </Link>
            <div className="product-card__name">
                {props.name}
            </div>
            <div className="product-card__price">
                {props.price}     <span>đồng</span>
            </div>
            <div className="product-card__rate">
                <div className="product-card__rate__star">
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star' ></i>
                </div>
                <div className="product-card__rate__respone">
                    {props.res}   đánh giá
                </div>
            </div>

        </div >
    )
}

export default ProductCard
