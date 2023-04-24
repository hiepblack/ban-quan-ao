import React, { useState, useContext } from "react";
import Siginmain from "../components/sigin/Siginmain";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../helper";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const Sigin = () => {
  const [data, setData] = useState({
    email: undefined,
    password: undefined,
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  // login with google
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${codeResponse.access_token}`,
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        navigate('/')
        toast.success('Đăng nhập thành công',{
          position: toast.POSITION.BOTTOM_RIGHT,
          className: 'foo-bar'
        });
      })
    },
    onError: (error) => console.log("Login Failed:", error),
  });

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
      <Siginmain setData={setData} data={data} handleClick={handleClick} login={login}/>
    </>
  );
};

export default Sigin;
