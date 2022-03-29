import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="container mt-4">
            <div className="banner">
                <img width='100%' style={{marginTop:'2rem',marginBottom:'2rem'}} src="https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/270065160_2470177593116127_4881443151514239092_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=8631f5&_nc_ohc=FXuphUG8Ec0AX_jlwZQ&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_-YlOlxql23e5SQh6aRU7TETjBFqHG5nSNxtXc-BA4bQ&oe=6247635A" alt="" />
            </div>
            <div className="row">
                <div className="col">
                    <h5>Về chúng tôi</h5>
                    <span>Website chính thức và duy nhất của MixiShop.Hiện tại bên mình chỉ nhận đơn hàng trên Website chứ không nhận bất kỳ nơi nào khác nhé !</span>
                </div>
                <div className="col">
                    <ul className="list-group">
                        <li className="list-group p-2 fw-bolder">Danh mục sản phẩm</li>
                        <li className="list-group p-2">Danh mục 1</li>
                        <li className="list-group p-2">Danh mục 2</li>
                        <li className="list-group p-2">Danh mục 3</li>
                    </ul>
                </div>
                <div className="col">
                    <ul className="list-group">
                        <li className="list-group p-2 fw-bolder">Thông tin</li>
                        <li className="list-group p-2">Giới thiệu</li>
                        <li className="list-group p-2">Chính sách bảo mật</li>
                        <li className="list-group p-2">Điều khoản</li>
                        <li className="list-group p-2">SiteMap</li>
                    </ul>
                </div>
                <div className="col">
                    <ul className="list-group">
                        <li className="list-group p-2 fw-bolder">Hỗ trợ</li>
                        <span>Mọi thắc mắc và góp ý cần hỗ trợ xin vui lòng liên hệ Fanpage và Instagram</span>
                    </ul>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer