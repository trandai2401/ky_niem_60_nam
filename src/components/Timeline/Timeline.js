import React from "react";
import "./style.css";
import khai_giang from "./khai_giang.png";
import xay_dung from "./xay_dung.svg";
import su_menh from "./su_mang.png";
import doi_ten_NVT from "./doi_ten_NVT.png";
import ute from "./ute.png";
import cs2 from "./cs2.png";
import cao_dang_cn from "./cao_dang_cn.png";
export default function Timeline() {
  return (
    <>
      <div className="wrapper">
        <div className="center-line">
          <a href="#" className="scroll-icon">
            <i className="fas fa-caret-up"></i>
          </a>
        </div>
        <div className="row row-1">
          <section>
            <i className="icon fas fa-home"></i>
            <div className="details">
              <span className="title">Bắt đầu xây dựng </span>
              <span>1960</span>
            </div>
            <p>
              <img src={xay_dung} width="350px" />
              <br />
              Năm 1960, đặt viên đá đầu tiên xây dựng. Trường được mang tên{" "}
              <strong>“Trường Kỹ thuật Đà Nẵng”</strong>
            </p>
            <div className="bottom">
              <a href="#">Read more</a>
            </div>
          </section>
        </div>
        <div className="row row-2">
          <section>
            <i className="icon fas fa-star"></i>
            <div className="details">
              <span className="title">Khai giảng khóa đầu tiên</span>
              <span>9 - 1962</span>
            </div>
            <p>
              Nay từ năm học đầu tiên, trường đã được trang bị cơ sở vật chất
              thực hành và giáo vụ đúng tiêu chuẩn Quốc tế thời đó cho một
              trường kỹ thuật công nghiệp. <br />
              <img src={khai_giang} width="350px " />
              <br></br>Sứ mệnh của trường là chuẩn bị cho học sinh hoàn tất bậc
              trung học với trình độ cần thiết.
              <img src={su_menh} width="350px" />
              <br></br>
              Sự nổi tiếng của trường gắn liền với màu
              <strong> áo xanh kỹ thuật</strong> truyền thống và phương thức đào
              tạo nghiêm khắc
            </p>
            <div className="bottom">
              <a href="#">Read more</a>
            </div>
          </section>
        </div>
        <div className="row row-1">
          <section>
            <i className="icon fas fa-rocket"></i>
            <div className="details">
              <span className="title">
                Trường Công nhân Kỹ thuật Nguyễn Văn Trỗi
              </span>
              <span>1976</span>
            </div>
            <p>
              <img src={doi_ten_NVT} width="350px" />
              <br />
              Chuyển đổi thành “ Trường Công nhân Kỹ thuật Nguyễn Văn Trỗi ”trở
              thành một trong những trường có thương hiệu ở miền Trung và cả
              nước.
            </p>
            <div className="bottom">
              <a href="#">Read more</a>
            </div>
          </section>
        </div>
        <div className="row row-2">
          <section>
            <i className="icon fas fa-globe"></i>
            <div className="details">
              <span className="title">
                Lấy tên là: “Trường Cao Đẳng Công Nghệ”
              </span>
              <span>1994</span>
            </div>
            <p>
              1994 Ngày 4/4/1994: Theo nghị định 32-CP của chính phủ, Đại học Đà
              Nẵng được thành lập trên cơ sở sáp nhập các trường trên địa bàn Đà
              Nẵng, trong đó có trường Công nhân Kỹ thuật Nguyễn Văn Trỗi. Lấy
              tên là: “ Trường Cao Đẳng Công Nghệ ”<br />
              <img src={cao_dang_cn} width="350px" />
              <br />
              <br />
              Là một trong năm trường thành viên đầu tiên đem lại cho trường vị
              thế mới
              <br />
              Nhiều phòng thí nghiệm, xưởng thực hành được đầu tư nhiều thiết bị
              hiện đại đáp ứng được yêu cầu đào tạo và nghiên cứu khoa học.
            </p>
            <div className="bottom">
              <a href="#">Read more</a>
            </div>
          </section>
        </div>
        <div className="row row-1">
          <section>
            <i className="icon fas fa-paper-plane"></i>
            <div className="details">
              <span className="title">
                Thành lập trường “ Đại học Sư phạm Kỹ thuật ”
              </span>
              <span>2017</span>
            </div>
            <p>
              Ngày 8 tháng 11 năm 2017: Thủ tướng Chính phủ Việt Nam đã ký Quyết
              định số 1749/QĐ–TTg thành lập trường “ Đại học Sư phạm Kỹ thuật ”
              thuộc Đại học Đà Nẵng
              <br />
              <img src={ute} width="350px" />
              Được xây dựng ở Trung tâm TP Đà Nẵng, cơ sở vật chất khang trang
              và hiện đại. Diện tích 42.000m2 <br />
              Trường ĐH Sư phạm Kỹ thuật Đà Nẵng đã hoàn thành cơ sở II ở “ Khu
              Đô thị Đại học Đà Nẵng thuộc phường Hoà Quý, quận Ngũ Hành Sơn,
              Thành phố Đà Nẵng ” với khối nhà làm việc 5 tầng và khối nhà học 4
              tầng
            </p>
            <div className="bottom">
              <a href="#">Read more</a>
            </div>
          </section>
        </div>
        <div className="row row-2">
          <section>
            <i className="icon fas fa-map-marker-alt"></i>
            <div className="details">
              <span className="title">Thành lập CS II</span>
              <span>2022</span>
            </div>
            <p>
              <img src={cs2} width="350px" />
              <br />
              Trường ĐH Sư phạm Kỹ thuật Đà Nẵng đã hoàn thành cơ sở II ở “ Khu
              Đô thị Đại học Đà Nẵng thuộc phường Hoà Quý, quận Ngũ Hành Sơn,
              Thành phố Đà Nẵng ” với khối nhà làm việc 5 tầng và khối nhà học 4
              tầng
            </p>
            <div className="bottom">
              <a href="#">Read more</a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
