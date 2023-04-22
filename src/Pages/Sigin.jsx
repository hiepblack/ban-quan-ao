import React, { useState, useContext } from "react";
import Siginmain from "../components/sigin/Siginmain";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../helper";

const Sigin = () => {
  const [data, setData] = useState({
    email: undefined,
    password: undefined,
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = async (e) => {
    console.log('abc');
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await fetch(`${BASE_URL}/auth/signin`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      console.log(result);
      if (!res.ok) return toast.warn(result.message);
      localStorage.setItem("token", result.accessToken);
      toast.success(result.message,{
        position: toast.POSITION.BOTTOM_RIGHT,
        className: 'foo-bar'
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: result.user });
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILED", payload: error.message });
    }
  };
  return (
    <>
      <Siginmain setData={setData} data={data} handleClick={handleClick}/>
    </>
  );
};

export default Sigin;
