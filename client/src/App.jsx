import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home.jsx'
import { NavBar } from './pages/components/NavBar.jsx'
import { Courses } from './pages/Courses.jsx'
import { UserInfo } from './pages/UserInfo.jsx'
import { UserReg } from './pages/UserReg.jsx'
import { Admin } from './pages/Admin.jsx'

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/admin' element={ <Admin/> }/>
        <Route path='courses' element={ <Courses/> }/>
        <Route path='userinfo' element={ <UserInfo/> }/>
        <Route path='userreg' element={ <UserReg/> }/>
      </Routes>
    </>
  )
}

export default App