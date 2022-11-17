import React from "react";
import "./MocLichSu.css";
import img from "./img.svg";
const MocLichSu = () => {
  return (
    <div className="moclichsu">
      <p className="title">Những mốc lịch sử quan trọng</p>
      <div className="content">
        <p>
          {" "}
          Trải qua gần 60 năm thành lập và phat triển. Đại học Sư phạm Kỹ thuật
          tự hào là trường nằm trong top 5 khu vực miền Trung về đào tạo và phát
          triển...
        </p>
        <img src={img} />
      </div>
    </div>
  );
};

export default MocLichSu;
