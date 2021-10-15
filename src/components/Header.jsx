import React, { useRef } from 'react'
import logo from './../assets/images/logo.png'
import fire from './../assets/images/fire.png'
import { Link } from 'react-router-dom'
const Header = () => {
    const MenuRef = useRef(null)
    const MenuToggle = () => MenuRef.current.classList.toggle('active')
    return (
        <div className="header">
            <div className="header__logo">
                <Link to="/"> <img src={logo} alt="" /></Link>
            </div>
            <div className="header__menu" ref={MenuRef}>
                <div onClick={MenuToggle} className="header__menu__toggle"><i class='bx bx-arrow-back'></i></div>

                <div className="header__menu__sale">
                    <img src={fire} alt="" />
                    <span>SALE 50%</span>
                </div>
                <li className="header__menu__item" >

                    <Link to="/product/catalogWoman" onClick={() => MenuToggle()} className="header__menu__item__link">ĐỒ NỮ</Link>


                </li>
                <li className="header__menu__item">

                    <Link to="/product/catalogMan" onClick={() => MenuToggle()} className="header__menu__item__link">ĐỒ NAM</Link>

                </li>
                <li className="header__menu__item">
                    <a className="header__menu__item__link">PHỤ KIỆN</a>
                </li>
                <li className="header__menu__item"><a onClick={() => MenuToggle()} className="header__menu__item__link">KHUYẾN MÃI</a></li>
                <li className="header__menu__item"><a onClick={() => MenuToggle()} className="header__menu__item__link">YOLO BLOG</a></li>
                <li className="header__menu__item"><a onClick={() => MenuToggle()} className="header__menu__item__link">CỬA HÀNG</a></li>
                <li className="header__menu__item"><a onClick={() => MenuToggle()} className="header__menu__item__link">CHỌN SIZE</a></li>

            </div>
            <div className="header__user-menu">
                <div className="header__user-menu__item">
                    <i class='bx bx-user'></i>
                </div>
                <div className="header__user-menu__item">
                    <i class='bx bx-search' ></i>
                </div>
                <div className="header__user-menu__item">
                    <Link to='/cart'><i class='bx bx-cart' ></i></Link>
                </div>
                <div onClick={MenuToggle} className="header__user-menu__toggle"><i className='bx bx-menu-alt-left'></i></div>
            </div>
        </div>
    )
}

export default Header
