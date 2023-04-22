import React,{useState,useContext} from 'react'
import SigupMain from '../components/sigup/sigup'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

import { BASE_URL } from "../helper";
import { AuthContext } from "../context/AuthContext";

const Sigup = () => {
  const [dataSignUp, setdataSignUp] = useState({
    userName: undefined,
    email: undefined,
    passWord: undefined,
    confirmpassWord:undefined,
    image:'https://picsum.photos/200/300'
  });
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(dataSignUp),
      });
      const result = await res.json();
      if (!res.ok) return toast.warn(Array.isArray(result.message) ? result.message[0] : result.message);
      toast.success(result.message);
      dispatch({ type: "REGISTER_SUCCESS" });
      navigate("/signin");
    } catch (error) {
      toast.warn(error.message);
    }
  };
  return (
    <>
        <SigupMain dataSignUp={dataSignUp} setdataSignUp={setdataSignUp} handleClick={handleClick}/>
    </>
  )
}

export default Sigup