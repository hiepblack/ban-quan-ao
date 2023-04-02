import "./blogdetail.css"
import React from 'react'
import Blogrelated from "./blogrelated/Blogrelated"

const BlogdetailContent  = () => {
  return (
    <div className="container ">
        <div className="content_blogdetail">
            <h1>ĐẦM XINH THU ĐÔNG MỚI NHẤT 2022</h1>
            <p>Đăng bởi : speedx</p>
            <img src="https://file.hstatic.net/200000182297/file/d01652144222240p1399dt__2__4__084945f6386742fe87ed19d2920bd81d_1024x1024.jpg" alt="" />
            <p>Nhắc tới mùa hè chắc hẳn các tín đồ thời trang không thể không nhắc tới những bộ trang phục rực rỡ sắc màu hay họa tiết bắt mắt. Để tô điểm thêm cho mùa hè đầy sôi động, các quý cô nên chọn cho mình những tone màu nổi bật như hồng, đỏ, xanh, vàng cùng vô vàn họa tiết thời thượng luôn chiếm vị trí trên các sàn diễn thời trang như: da beo, chấm bi, hoa, kẻ sọc,... Trong số đó, họa tiết hoa luôn được phần lớn nữ giới ưa chuộng bởi sự nữ tính, nổi bật và tính ứng dụng cao. Được mệnh danh là "họa tiết không tuổi", những bông hoa rực rỡ nở rộ trên trang phục luôn giúp người mặc "ăn gian" tuổi tác cực hiệu quả. 

            Khi diện chiếc đầm hoa, nàng hoàn toàn có thể tự tin mọi khuyết điểm cơ thể đều được che phủ bởi đường nét mềm mại của họa tiết này khéo léo tạo nên đường cong thanh mảnh, đầy quyến rũ. Đây cũng chính là điểm cộng khiến item này chiều lòng được mọi chị em phụ nữ kể cả các nàng khó tính nhất. 

            Cùng NEM điểm lại 5 thiết kế đầm hoa đặc sắc nhất - không thể thiếu trong tủ đồ các nàng mỗi dịp hè về. </p>
        </div>
        <div className="related">
          <div>comment</div>
        <Blogrelated/>
        </div>
    </div>
    
  )
}

export default BlogdetailContent