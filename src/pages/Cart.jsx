import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'
const Cart = () => {
    const cartItem = useSelector(state => state.cartItemSlide.value)
    const [cardProduct, setCardProduct] = useState(cartItem)
    const [totalProduct, setTotalProduct] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const Buy = () => {
        alert('Success')
    }
    useEffect(() => {
        setCardProduct(cartItem)
        setTotalProduct(cartItem.reduce((total, item) => total + item.quantity, 0))
        setTotalPrice(cartItem.reduce((total, item) => total + item.quantity * item.price, 0))
    }, [cartItem])
    const onBuy = () => {
        alert('Bạn đã mua hàng thành công!')
    }
    return (
        <div className="cart" >
            <div className="cart__info">
                <div className="cart__info__txt">
                    <p>Bạn có <span>{totalProduct}</span> sản phẩm trong giỏ hàng</p>
                </div>
                <div className="cart__info__price">
                    <p>Tổng cộng: <span>{totalPrice}</span></p>
                </div>
                <div className="cart__info__btn">
                    <div onClick={Buy} className="cart__info__btn__order" onClick={onBuy} >
                        Đặt hàng
                    </div>
                    <div className="cart__info__btn__buy">
                        <div>
                            <Link to='/product/catalogWoman' className="cart__info__btn__buy__packet"> Mua hàng nữ
                            </Link>
                        </div>
                        <div>
                            <Link to='/product/catalogMan' className="cart__info__btn__buy__packet">Mua hàng nam
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
            <div className="cart__list">
                {cardProduct.map((item, index) => (
                    <CartItem item={item} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Cart
