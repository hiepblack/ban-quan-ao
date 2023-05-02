import React ,{ useState, useEffect} from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AdminLayout from "../layout/admin";
import TableProduct from "../components/table/tableproduct";
import TableCate from "../components/table/tableCate";
import Formproduct from "../components/form/formProduct";
import Formcate from "../components/form/fromCate";
import { addnewProduct, getAll, updateProduct, updateProductstatus } from "../api/products";
import { addnewcate, deletecate, getAllcate, updatecate } from "../api/cate";
import {message} from 'antd'
import UpdateProduct from "../components/form/updateproduct";
import UpdateCate from "../components/form/updateCate";
import Dashboard from "../components/dashboard/dashboard";
import { getAllod } from "../api/order";
import { getAlluser } from "../api/user";

const RouterAdmin = () => {
  const [products,setproducts] = useState([]);
  const [cates,setcates] = useState([]);
  const [users,setuser] = useState([]);
  const [order,setorder] =useState([]);
  const navigate = useNavigate()
  useEffect(()=>{
    getAll().then(({data})=>setproducts(data.products.docs));
    getAllcate().then(({data})=>setcates(data.cates));
    getAllod().then(({data})=>setorder(data.order));
    getAlluser().then(({data})=>setuser(data.users));
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
  const onUpdate = (data,id)=>{
    updateProduct(data,id).then(()=>{
      getAll().then(({data})=>setproducts(data.products.docs));
      getAllcate().then(({data})=>setcates(data.cates));
    })
    message.success("Thành công!");
    navigate("/admin/productManager")
  }
  const onUpdateCate = (cate,id)=>{
    updatecate(cate,id).then(()=>{
      getAll().then(({data})=>setproducts(data.products.docs));
      getAllcate().then(({data})=>setcates(data.cates));
    })
    message.success("Thêm Thành công!");
    navigate("/admin/cateManager")
  }
  const onRemoveCate = (id)=>{
    deletecate(id).then(()=>{
      getAll().then(({data})=>setproducts(data.products.docs));
      getAllcate().then(({data})=>setcates(data.cates));
    })
    message.success("Thành công")
  }
  
  return (
    <Routes>
        <Route path="/"element={<AdminLayout/>}>
            <Route path="" index element={<Dashboard products={products} cates={cates} users={users} order={order}/>}/>
            <Route path="productManager" element={<TableProduct products={products} onStatus={onStatus}/>}/>
            <Route path="addNewProduct" element={<Formproduct onAdd={onAdd} cates={cates}/>}/>
            <Route path="productManager/:id" element={<UpdateProduct products={products} onUpdate={onUpdate} cates={cates}/>}/>
            <Route path="cateManager" element={<TableCate cates={cates} onRemoveCate={onRemoveCate }/>}/>
            <Route path="addNewCate" element={<Formcate onAddCate={onAddCate}/>}/>
            <Route path="cateManager/:id" element={<UpdateCate cates={cates} onUpdateCate={onUpdateCate} />}/>
        </Route>
    </Routes>
  )
}

export default RouterAdmin