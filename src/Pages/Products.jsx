import React from 'react';
import Banner from '../components/banner/Banner';
import FiterProduct from "../components/product/fiterProduct/FiterProduct"
import ListProduct from '../components/product/listProduct/ListProduct';
import "../style/product.css"
const Products = () => {

    return (
        <>
           <Banner param={"Trang Chủ / Bộ Sưu Tập"} title={"Bộ Sưu Tập"}/>
           <section className="product container">
             <div className="product__container grid">
                <FiterProduct/>
                <ListProduct/>
             </div>
           </section>
        </>
    );
};

export default Products;