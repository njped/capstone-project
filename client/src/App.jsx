import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home.jsx'
import { Courses } from './pages/Courses.jsx'
import { UserInfo } from './pages/UserInfo.jsx'
import { UserReg } from './pages/UserReg.jsx'
import { Admin } from './pages/Admin.jsx'
import { Login } from './pages/Login.jsx'
import { useState, useEffect } from 'react'

function App() {
  // const [count, setCount] = useState(0);
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);
  
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='login' element={<Login />} />
        <Route path='home' element={<Home />} />
        <Route path='admin' element={<Admin />} />
        <Route path='courses' element={<Courses />} />
        <Route path='user-info' element={<UserInfo />} />
        <Route path='user-reg' element={<UserReg />} />
      </Routes>
    </>
  )
}

export default App