import React from "react"
import { NavBar } from './components/NavBar.jsx'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast } from 'react-toastify'
import '../App.css';

export function Home() {

  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        "http://localhost:5050/api/user/",
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
          })
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  const Logout = () => {
    removeCookie("token");
    navigate("/login");
  };

  return (
    <>
      <NavBar/>
      <h1>Home Page</h1>
      <h4>
          {" "}
          Welcome <span>{username}</span>
      </h4>
        <button onClick={Logout}>LOGOUT</button>
      
    </>
  )
}
