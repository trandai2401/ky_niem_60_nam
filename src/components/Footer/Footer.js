import React from "react";
import "./footer.css";
import together from "./together.svg";
import cuteGirl from "./cute_girl.svg";
import dai from "./Dai.png";
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="f_top">
          <div className="f_item">
            <img src={together} width="450px" />
          </div>
          <div className="f_item">
            <h1 className="quote">
              Với niềm tự hào sâu sắc. Sinh viên chúng em phải càng nổ lực để
              đưa trường tiến xa hơn nữa...
            </h1>
          </div>

          <div className="f_item">
            <img className="img_profile" src={dai} width="350px" />
            <div className="profile_text">
              <p>Sinh viên: Trần Đại</p>
              <p>Mã sinh viên : 1911505310207</p>
              <p>Lớp : 19T2</p>
              <p>Chuyên ngành: Công nghệ thong tin</p>
            </div>
          </div>

          <div className="f_item">
            <img src={cuteGirl} width="450px" />
          </div>
        </div>
      </div>
      <div className="b_footer">
        <p>
          Copyright 2022 Website University of Technology and Education - The
          University of Danang. All Rights Reserved.
        </p>
        <p>
          Địa chỉ: số 48 Cao Thắng, TP. Đà Nẵng - Điện thoại: (0236) 3822571 -
          Email: dhspktdn@ute.udn.vn
        </p>
      </div>
    </>
  );
}
