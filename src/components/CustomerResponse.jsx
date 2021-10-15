import React from 'react'
import response from './../assets/images/reponse.jpg'
const CustomerResponse = () => {
    return (
        <div className="customer-response">
            <div className="customer-response__des">
                <div className="customer-response__des__title">
                    YOLO SPORT "MẶC ĐẸP SỐNG KHỎE"
                </div>
                <div className="customer-response__des__name">
                    KHÁCH HÀNG NÓI GÌ VỀ #YOLOSPORT
                </div>
                <div className="customer-response__des__detail">
                    Hàng trăm nghìn khách hàng đã hài lòng khi đến YOLO SPORT mua sắm và không ngừng giới thiệu bạn bè. Sứ mệnh của YOLO SPORT giúp người Việt Nam khỏe đẹp hơn từng ngày khi mang lên mình những sản phẩm thể thao tốt nhất. Bằng chính những trải nghiệm lâu dài và nghiên cứu tâm huyết, chúng tôi tin rằng bằng cách đưa đến sự đơn giản, tiện lợi và giá cả hợp lý sẽ là con đường giúp chúng tôi thực hiện sứ mệnh của mình.
                </div>
            </div>
            <div className="customer-response__img">
                <img src={response} alt="" />
            </div>
        </div>
    )
}

export default CustomerResponse
