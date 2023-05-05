import React from 'react'
import RouterAdmin from '../router/RouterAdmin';
import { Outlet, Navigate } from 'react-router-dom';
import { message } from 'antd';
const useAuth = () =>{
    const user = {loggeIn:false};
    const checked= JSON.parse(localStorage.getItem("user"))
    if(checked){
        if(checked.role ==="admin"){
            const user = {loggeIn:true};
            return user&& user.loggeIn
        }else{
            return user&& user.loggeIn
        }
    }
    return user&& user.loggeIn
}
const Proteced = () => {
    const isAuth = useAuth()
  return isAuth?<RouterAdmin/>:<Navigate to={"/signin"}/>
}

export default Proteced