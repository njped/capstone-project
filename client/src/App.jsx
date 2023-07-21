import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import { Home } from './pages/Home.jsx'
import { Courses } from './pages/Courses.jsx'
import { UserInfo } from './pages/UserInfo.jsx'
import { UserReg } from './pages/UserReg.jsx'
import { Admin } from './pages/Admin.jsx'
import { Login } from './pages/Login.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <Login/> }/>
        <Route path='home' element={ <Home/> }/>
        <Route path='admin' element={ <Admin/> }/>
        <Route path='courses' element={ <Courses/> }/>
        <Route path='user-info' element={ <UserInfo/> }/>
        <Route path='user-reg' element={ <UserReg/> }/>
      </Routes>
    </>
  )
}

export default App