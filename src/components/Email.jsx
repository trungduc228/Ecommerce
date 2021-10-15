import React from 'react'

const Email = () => {
    return (
        <div className="email">
            <div className="email__gift">
                <div className="email__gift__icon">
                    <i class='bx bx-mail-send'></i>
                </div>
                <div className="email__gift__text">
                    ĐĂNG KÝ EMAIL NHẬN NGAY PHIẾU QUÀ TẶNG
                </div>
            </div>
            <div className="email__register">
                <div className="email__register__input">
                    <input type="text" placeholder="Nhập email của bạn" />
                </div>
                <div className="email__register__submit">
                    ĐĂNG KÍ
                </div>
            </div>
            <div className="email__hotline">
                <div className="email__hotline__icon">
                    <i class='bx bxs-phone-call' ></i>
                </div>
                <div className="email__hotline__phone">
                    Hotline Hỗ trợ và Mua hàng:<span>0939.029.818</span>
                </div>
            </div>
        </div>
    )
}

export default Email
