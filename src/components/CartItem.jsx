import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { update, remove } from './../redux/shoppingCart/cartItemSlide'
const CartItem = props => {
    const dispatch = useDispatch()
    const [item, setItem] = useState(props.item)
    const [quantity, setQuantity] = useState(props.item.quantity)
    const updateQuantity = (sign) => {
        if (sign === '+') {
            dispatch(update({ ...item, quantity: quantity + 1 }))
        }
        if (sign === '-') {
            dispatch(update({ ...item, quantity: quantity - 1 < 0 ? 1 : quantity - 1 }))
        }
    }
    useEffect(() => {
        setItem(props.item)
        setQuantity(props.item.quantity)
    }, [props.item])
    const removeCartItem = () => {
        dispatch(remove(item))
    }
    return (
        <div className="cart__item">
            <div className="cart__item__image">
                <img src={item.image} />
            </div>
            <div className="cart__item__info">
                <div className="cart__item__info__name">
                    {`${props.item.title}-${props.item.color}-${props.item.size}`}
                </div>
                <div className="cart__item__info__price">
                    {props.item.price}
                </div>
                <div className="cart__item__info__quantity">
                    <div className="cart__item__info__quantity__btn" onClick={() => updateQuantity('-')}>
                        <i className="bx bx-minus"></i>
                    </div>
                    <div className="cart__item__info__quantity__input">
                        {quantity}
                    </div>
                    <div className="cart__item__info__quantity__btn" onClick={() => updateQuantity('+')}>
                        <i className="bx bx-plus"></i>
                    </div>
                </div>
                <div className="cart__item__info__delete">
                    <i className='bx bx-trash' onClick={() => removeCartItem()}></i>
                </div>
            </div>
        </div>
    )
}

export default CartItem
