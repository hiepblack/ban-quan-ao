import React from "react";
import "./detail.css";
const Detailcard = () => {
  return (
    <div className="container">
      <div className="container-detail">
        <div className="image-product">
          <div className="thumbnail">
            <img
              src="https://product.hstatic.net/200000542485/product/1_ae532ea39f184b549041f3fb240a5f55_1024x1024.png"
              alt=""
            />
            <img
              src="https://product.hstatic.net/200000542485/product/2_aeb85f4e858043639fa20f632f8d17be_1024x1024.png"
              alt=""
            />
            <img
              src="https://product.hstatic.net/200000542485/product/3_d6c8b3eb7d1c4dcf9edde1329a5d0712_1024x1024.png"
              alt=""
            />
          </div>
          <div className="large-image">
            <img
              src="https://product.hstatic.net/200000542485/product/1_ae532ea39f184b549041f3fb240a5f55_1024x1024.png"
              alt=""
            />
          </div>
        </div>
        <div className="detail-product">
          <div className="content-deltail">
            <h1>SƠ MI TAY LỠ, DÁNG SƠ VIN E019B</h1>
            <p className="price">250,000₫</p>
            <p>THƯƠNG HIỆU: SPEEDX FASHION</p>
          </div>
          <div>
            <p>Kích thước:size 1</p>
            <div className="btn-size">
              <button className="btn">Size1</button>
              <button className="btn">Size2</button>
              <button className="btn">Size3</button>
              <button className="btn">Size4</button>
            </div>
            <p>Màu sắc:</p>
            <div className="input_color">
              <input type="color" />
            </div>
            <p>Số lượng:</p>
            <div className="quantity">
              <input type="number" min={0} defaultValue={1} />
            </div>
            <div className="btn-sumbit">
              <button type="submit" className="up">
                THÊM VÀO GIỎ HÀNG
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailcard;
