import React from 'react'
import exercise from '../assets/images/exercise.png'

const Introduction = () => {
    return (
        <div className="introduction">
            <div className="introduction__img">
                <img src={exercise} alt="" />
            </div>
            <div className="introduction__description">
                <div className="introduction__description__title">
                    HỆ THỐNG CỬA HÀNG THỜI TRANG THỂ THAO THIẾT KẾ
                </div>
                <div className="introduction__description__name">
                    YOLO SPORT
                </div>
                <div className="introduction__description__border"></div>
                <div className="introduction__description__des">
                    Bắt nguồn từ tình yêu đối với thể thao, bằng chính những trải nghiệm và nghiên cứu tâm huyết, YOLO SPORT tin rằng việc đảm bảo sản phẩm chất lượng, giá cả hợp lý và dịch vụ chăm sóc vượt trội sẽ là con đường giúp chúng tôi thực hiện sứ mệnh giúp con người Việt Nam năng động và trẻ trung hơn mỗi ngày.
                </div>
                <div className="introduction__description__button">
                    XEM HỆ THỐNG CỬA HÀNG
                </div>
            </div>
        </div>
    )
}

export default Introduction
