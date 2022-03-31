import React from 'react'

const Footer = () => {
  return (
        <div className="mt-4 w-5/6 mx-auto">
            <div className=" grid grid-cols-4 gap-8">
                <div className="cols">
                    <h5 className='font-[600] text-2xl py-2'>Về chúng tôi</h5>
                    <span>Website chính thức và duy nhất của MixiShop.Hiện tại bên mình chỉ nhận đơn hàng trên Website chứ không nhận bất kỳ nơi nào khác nhé !</span>
                </div>
                <div className="cols">
                    <ul className="">
                        <li className="font-[600] text-2xl py-2">Danh mục sản phẩm</li>
                        <li className="py-2">Danh mục 1</li>
                        <li className="py-2">Danh mục 2</li>
                        <li className="py-2">Danh mục 3</li>
                    </ul>
                </div>
                <div className="cols">
                    <ul className="">
                        <li className="font-[600] text-2xl py-2">Thông tin</li>
                        <li className="py-2">Giới thiệu</li>
                        <li className="py-2">Chính sách bảo mật</li>
                        <li className="py-2">Điều khoản</li>
                        <li className="py-2">SiteMap</li>
                    </ul>
                </div>
                <div className="cols">
                    <ul className="">
                        <li className="font-[600] text-2xl py-2">Hỗ trợ</li>
                        <span>Mọi thắc mắc và góp ý cần hỗ trợ xin vui lòng liên hệ Fanpage và Instagram</span>
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default Footer