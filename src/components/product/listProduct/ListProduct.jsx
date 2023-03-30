import React from "react";
import "./listproduct.css";
import CardProducts from "../../cardProduct/CardProducts";
import {useDispatch } from 'react-redux';
import {addCart} from "../../../redux/cartSlice"

const ListProduct = ({ data,handleDetail,setToggleCart }) => {
  const dispatch = useDispatch();
   const handleAddtoCart = (product)=>{
      const newProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image.mainImage,
        size: 1,
        color: 'black',
        totalPrice: product.price * 1
      }
      const action  = addCart(newProduct)
      dispatch(action);
    }

  return (
    <div className="listproduct">
      <div className="listproduct__header">
        <p>{data.length} sản phẩm</p>
        <div className="listproduct__header__filter">
          <p>Lọc</p>
          <select name="" id="" className="listproduct__header__select">
            <option value="">Theo tên A-Z</option>
            <option value="">Theo tên Z-A</option>
            <option value="">Theo giá tăng dần</option>
            <option value="">Theo giá giảm dần</option>
          </select>
        </div>
      </div>
      <div className="listproduct__body grid">
        {data.map((product, index) => {
          return (
            <React.Fragment key={index}>
              <CardProducts product={product} handleDetail={handleDetail} setToggleCart={setToggleCart} handleAddtoCart={handleAddtoCart}/>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
