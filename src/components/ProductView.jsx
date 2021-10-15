import React, { useState } from 'react'
import { withRouter } from 'react-router'
import { useDispatch } from 'react-redux'
import { add } from '../redux/shoppingCart/cartItemSlide'
const ProductView = props => {
    const product = props.product
    const [previewImg, setPreviewImg] = useState(product.img01)
    const [expand, setExpand] = useState(false)
    const [color, setColor] = useState(null)
    const [size, setSize] = useState(null)
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()
    const updateQuantity = (type) => {
        if (type === 'minus') {
            if (quantity === 1) {
                setQuantity(1)
            }
            else {
                setQuantity(quantity - 1)
            }
        } else {
            setQuantity(quantity + 1)
        }
    }
    const check = () => {
        if (color === null) {
            alert('Vui lòng chọn màu sắc!')
            return false
        }
        if (size === null) {
            alert('Vui lòng chọn kích cỡ!')
            return false
        }
        else return true
    }
    const addToCart = () => {
        if (check()) {
            let newItem = {
                slug: product.slug,
                color: color,
                size: size,
                price: product.price,
                quantity: quantity,
                image: product.img01,
                title: product.title
            }
            if (dispatch(add(newItem))) {
                alert('Bạn đã thêm vào giỏ hàng thành công! Vui lòng kiểm tra lại giỏ hàng của bạn')
            }
            else {
                alert('fail')
            }

        }
    }
    const goToCart = () => {
        if (check()) alert('Phần này là của phias Back-end rồi :v')
    }
    return (
        <div className="product">
            <div className="product__image">
                <div className="product__image__list">
                    <div className="product__image__list__item" onClick={() => setPreviewImg(product.img01)}>
                        <img src={product.img01} alt="" />
                    </div>
                    <div className="product__image__list__item" onClick={() => setPreviewImg(product.img02)} >
                        <img src={product.img02} alt="" />
                    </div>
                </div>
                <div className="product__image__main">
                    <img src={previewImg} />
                </div>
                <div className={`product-description ${expand ? 'expand' : ''}`}>
                    <div className="product-description__title">
                        Chi tiết sản phẩm
                    </div>
                    <div className="product-description__content" dangerouslySetInnerHTML={{ __html: product.description }}></div>
                    <div className="product-description__button" onClick={() => setExpand(!expand)}>
                        {expand ? 'Thu gọn' : 'Xem thêm'}
                    </div>
                </div>
            </div>

            <div className="product__info">
                <h1 className="product__info__title">{product.title}</h1>
                <div className="product__info__price">{product.price}</div>
                <div className="product__info__item">
                    <div className="product__info__item__title">
                        Màu sắc
                    </div>
                    <div className="product__info__item__list">
                        {
                            product.colors.map((item, index) => (
                                <div key={index} className={`product__info__item__list__item ${item === color ? 'active' : ''}`} onClick={() => setColor(item)}>
                                    <div className={`circle bg-${item}`}></div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="product__info__item">
                    <div className="product__info__item__title">
                        Kích cỡ
                    </div>
                    <div className="product__info__item__list">
                        {
                            product.sizes.map((item, index) => (
                                <div key={index} className={`product__info__item__list__item ${item === size ? 'active' : ''}`} onClick={() => setSize(item)}>
                                    <span className="product__info__item__list__item__size">{item}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="product__info__item">
                    <div className="product__info__item__title">
                        Số lượng
                    </div>
                    <div className="product__info__item__quantity">
                        <div className="product__info__item__quantity__button" onClick={() => updateQuantity('minus')}>
                            <i className="bx bx-minus"></i>
                        </div>
                        <div className="product__info__item__quantity__number">
                            {quantity}
                        </div>
                        <div className="product__info__item__quantity__button" onClick={() => updateQuantity('plus')}>
                            <i className="bx bx-plus"></i>
                        </div>
                    </div>
                </div>
                <div className="product__info__item product__info__item__button1">
                    <div className="product__info__item__button" onClick={() => addToCart()}>Thêm vào giỏ</div>
                    <div className="product__info__item__button" onClick={() => goToCart()}>Mua ngay</div>
                </div>
            </div>
            <div className={`product-description mobile ${expand ? 'expand' : ''}`}>
                <div className="product-description__title">
                    Chi tiết sản phẩm
                </div>
                <div className="product-description__content" dangerouslySetInnerHTML={{ __html: product.description }}></div>
                <div className="product-description__button" onClick={() => setExpand(!expand)}>
                    {expand ? 'Thu gọn' : 'Xem thêm'}
                </div>
            </div>
        </div >
    )
}

export default withRouter(ProductView)

