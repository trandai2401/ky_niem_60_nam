import React from "react";
import "./Header.css";
import bgHeader from "../image/img-header.svg";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={bgHeader} />
        <div className="text-header">
          <p>
            Đại học Sư phạm
            <br />
            Kỹ thuật
          </p>
          <span>Chắp cánh ước mơ</span>
        </div>
        <div className="card-content">
          <p>Kỷ niệm 60 thành lập trường</p>
        </div>
      </div>
    </>
  );
};

export default Header;
