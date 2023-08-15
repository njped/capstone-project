import React from "react"
import { NavBar } from './components/NavBar.jsx'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './Home.css';
import { AppHeader } from "./components/AppHeader.jsx";

export function Home() {

  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const res = await fetch("http://localhost:5050/api/user/", {
        method: "POST",
        body: JSON.stringify({token: cookies.token}),
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + cookies.token
        },
        credentials: "include"
      }
      );
      const data = await res.json()
      const { status, user } = data;
      setUsername(user.username);
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  const Logout = () => {
    removeCookie("token");
    navigate("/login");
  };

  return (
    <> 
      <div id="homePageContainer">
        <div id="homePageNav">
          <NavBar/>
        </div>
        <div id="homeMainContentContainer">
          <div id="homePageHeaderBar">
            <AppHeader/>
          </div>
          <div id="homePageManage">
            <h1>Home Page</h1>
          </div> 
        </div>
      </div>
    </>
  )
}
