import React from "react";
import "./CardBody.css";
import img1 from "../image/1994_01.jpg";
import img2 from "../image/1994_02.jpg";
import img3 from "../image/1994_06.jpg";
import img4 from "../image/1994_07.jpg";
import img5 from "../image/2017_03.jpg";
import img7 from "../image/2017_06.jpg";
import img8 from "../image/sliderhd01.png";
import img6 from "../image/DSC00168.JPG";

const CardBody = () => {
  return (
    <>
      <div className="img-grid">
        <div className="img 01">
          <img src={img1} />
        </div>
        <div className="img 02">
          <img src={img2} />
        </div>
        <div className="img 03">
          <img src={img3} />
        </div>
        <div className="img 04">
          <img src={img4} />
        </div>
        <div className="img 05">
          <img src={img5} />
        </div>
        <div className="img 06">
          <img src={img6} />
        </div>
        <div className="img 07">
          <img src={img7} />
        </div>
        <div className="img 07">
          <img src={img8} />
        </div>
      </div>
    </>
  );
};

export default CardBody;
