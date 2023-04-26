import React ,{ useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "../layout/admin";
import TableProduct from "../components/table/tableproduct";
import TableCate from "../components/table/tableCate";
import Formproduct from "../components/form/formProduct";
import Formcate from "../components/form/fromCate";
import { getAll } from "../api/products";
import { getAllcate } from "../api/cate";

const RouterAdmin = () => {
  const [products,setproducts] = useState([]);
  const [cates,setcates] = useState([]);
  useEffect(()=>{
    getAll().then(({data})=>setproducts(data.products));
    getAllcate().then(({data})=>setcates(data.cates));
  },[])
  return (
    <Routes>
        <Route path="/"element={<AdminLayout/>}>
            <Route path="productManager" element={<TableProduct products={products}/>}/>
            <Route path="addNewProduct" element={<Formproduct/>}/>
            <Route path="cateManager" element={<TableCate cates={cates}/>}/>
            <Route path="addNewCate" element={<Formcate/>}/>
        </Route>
    </Routes>
  )
}

export default RouterAdmin