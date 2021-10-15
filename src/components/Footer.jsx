import React from 'react'
import Grid from './../components/Grid'
import ecommerce from './../assets/images/ecommerce.png'
import { Link } from 'react-router-dom'
const Footer = () => {
    const policy = [
        {
            display: 'Câu chuyện về YOLO SPORT',
            path: '/'
        },
        {
            display: 'Hệ thống cửa hàng',
            path: '/'
        },
        {
            display: 'Chương trình khuyến mãi',
            path: '/'
        },
        {
            display: 'Chương trình khuyến mãi',
            path: '/'
        },
        {
            display: 'Chính sách giao hàng',
            path: '/'
        },
        {
            display: 'Chính sách bảo hành',
            path: '/'
        },
        {
            display: 'Chính sách bảo mật',
            path: '/'
        },
        {
            display: 'Đặc quyền khách hàng thân thiết',
            path: '/'
        },
        {
            display: 'Nhà máy sản xuất',
            path: '/'
        },
        {
            display: 'YOLO Blog - Mặc đẹp sống khỏe',
            path: '/'
        },
    ]
    return (
        <div className="footer">
            <Grid col={4} mdCol={2} smCol={1}>
                <div className="footer__margin1">
                    <div className="footer__title">
                        Câu chuyện về YOLO SPORT
                    </div>
                    <div className="footer__content footer__content1" >
                        <p>YOLO SPORT là thương hiệu thời trang thể thao thiết kế dành cho nam và nữ. Được sinh ra từ tình yêu đối với thể thao, sứ mệnh của YOLO SPORT là giúp con người Việt Nam đẹp hơn và tốt hơn mỗi ngày bởi YOLO SPORT tin rằng người Việt Nam xứng đáng có được những sản phẩm thời trang mang phong cách thể thao để giúp mình năng động trẻ trung hơn và thời thượng hơn. Bằng chính những trải nghiệm lâu dài và nghiên cứu tâm huyết, chúng tôi tin rằng bằng việc đảm bảo sản phẩm chất lượng, giá cả hợp lý và dịch vụ chăm sóc vượt trội sẽ là con đường giúp chúng tôi thực hiện sứ mệnh của mình.</p>
                        <p>Mã số doanh nghiệp: 41M8034941. Giấy chứng nhận đăng ký Hộ kinh doanh do TP HCM cấp lần đầu ngày 12/09/2017.</p>
                    </div>

                </div>
                <div>
                    <div className="footer__title">
                        Truy cập nhanh
                    </div>
                    <div className="footer__content">
                        {
                            policy.map((item, index) => (
                                <p>
                                    <Link to={item.path}>{item.display}</Link>
                                </p>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <div className="footer__title">
                        Thông tin
                    </div>
                    <div className="footer__content">
                        <div className="footer__content__system">
                            <div className="footer__content__system__name">
                                <div className="footer__content__system__name__icon">
                                    <i class='bx bx-current-location'></i>
                                </div>
                                <div className="footer__content__system__name__res">
                                    Hệ thống cửa hàng:
                                </div>
                            </div>
                            <div className="footer__content__system__detail">
                                <p><span>-Gò Vấp</span>: 497 Phan Văn Trị, P5, Q.Gò Vấp, TP.HCM</p>
                                <p><span>-Bình Thạnh</span>: 13 đường D5, P25, Q.Bình Thạnh, TP.HCM</p>
                                <p><span>-Tân Bình</span>: 510 Cộng Hòa, P13, Q.Tân Bình, TP.HCM</p>
                                <p><span>-Tân Bình</span>: 146 Âu Cơ, P9, Q.Tân Bình, TP.HCM</p>
                                <p><span>-Tân Bình</span>: 282 Hoàng Văn Thụ, P4, Q.Tân Bình, TP.HCM</p>
                                <p><span>-Quận 10</span>: 580 Lê Hồng Phong, P10, Q.10, TP.HCM</p>
                                <p><span>-Phú Nhuận</span>: 195 Phan Đình Phùng, P17, Q.Phú Nhuận, TP.HCM</p>
                            </div>
                        </div>
                        <div className="footer__content__call">
                            <div className="footer__content__call__icon">
                                <i class='bx bxs-institution'></i>
                            </div>
                            <div className="footer__content__call__phone">
                                Call: 0939.029.818
                            </div>
                        </div>
                        <div className="footer__content__zalo">
                            <div className="footer__content__zalo__icon">
                                <i class='bx bxs-calendar-minus' ></i>
                            </div>
                            <div className="footer__content__zalo__phone">
                                Zalo: 0939.029.818
                            </div>
                        </div>
                        <div className="footer__content__email">
                            <div className="footer__content__email__icon">
                                <i class='bx bxs-calendar' ></i>
                            </div>
                            <div className="footer__content__email__phone">
                                cskhyolosport@gmail.com
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="footer__img">
                        <img src={ecommerce} alt="" />
                    </div>
                </div>
            </Grid>
        </div>
    )
}

export default Footer
