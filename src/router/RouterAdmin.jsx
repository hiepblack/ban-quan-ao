import React ,{ useState, useEffect} from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AdminLayout from "../layout/admin";
import TableProduct from "../components/table/tableproduct";
import TableCate from "../components/table/tableCate";
import Formproduct from "../components/form/formProduct";
import Formcate from "../components/form/fromCate";
import { addnewProduct, getAll, updateProductstatus } from "../api/products";
import { addnewcate, getAllcate, updatecate } from "../api/cate";
import {message} from 'antd'
const RouterAdmin = () => {
  const [products,setproducts] = useState([]);
  const [cates,setcates] = useState([]);
  const navigate = useNavigate()
  useEffect(()=>{
    getAll().then(({data})=>setproducts(data.products.docs));
    getAllcate().then(({data})=>setcates(data.cates));
  },[])
  const onAdd = (product) =>{
    addnewProduct(product).then(()=>{
      getAll().then(({data})=>setproducts(data.products.docs));
      getAllcate().then(({data})=>setcates(data.cates));
    })
    message.success("Thêm Thành công!");
    navigate("/admin/productManager")
  }
  const onAddCate = (cate)=>{
    addnewcate(cate).then(()=>{
      getAll().then(({data})=>setproducts(data.products.docs));
      getAllcate().then(({data})=>setcates(data.cates));
    })
    message.success("Thêm Thành công!");
    navigate("/admin/cateManager")
  }
  const onStatus =(value)=>{
    updateProductstatus(value).then(()=>{
      getAll().then(({data})=>setproducts(data.products.docs));
      getAllcate().then(({data})=>setcates(data.cates));
    })
    message.success("Thành công!");
  }
  return (
    <Routes>
        <Route path="/"element={<AdminLayout/>}>
            <Route path="productManager" element={<TableProduct products={products} onStatus={onStatus}/>}/>
            <Route path="addNewProduct" element={<Formproduct onAdd={onAdd} cates={cates}/>}/>
            <Route path="cateManager" element={<TableCate cates={cates} />}/>
            <Route path="addNewCate" element={<Formcate onAddCate={onAddCate}/>}/>
        </Route>
    </Routes>
  )
}

export default RouterAdmin