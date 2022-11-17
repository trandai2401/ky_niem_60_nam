import React from "react";
import "./Cosohatang.css";
import img1 from "./2017_01.jpg";
import img2 from "./2017_06.jpg";
import img3 from "./2017_05.jpg";
import img4 from "./coso2.PNG";

const Cosohatang = () => {
  return (
    <div className="cosohatang">
      <div className="ggg">
        <p className="title">Cơ sở hạ tầng</p>
        <div className="content">
          <div className="left">
            <div className="diachi">48 Cao Thắng - Hải Châu - Đà Nẵng</div>
            <div className="text">
              Hiện nay, trường đã có một cơ sở mở ở địa chỉ cẩm lệ với hầu hết
              các trang thiết bị hiện đại, phục vụ tối đa cho sinh viên đang học
              ở trường. Năm 2022, nhà trường cùng với các nguồn lực hổ trợ đã
              chỉnh trang lại các phòng học, xây dựng khang trang để đón chào kỷ
              niệm 60 năm thành lập
            </div>
          </div>
          <div className="right">
            <img src={img1} />
            <img src={img2} />
            <img src={img3} />
            <img src={img4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cosohatang;
