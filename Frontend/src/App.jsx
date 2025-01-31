import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Start from './pages/Start';
import Home from './pages/Home';
import UserLogin from './pages/userLogin';
import UserSignUp from './pages/userSignUp';
import CaptainLogin from './pages/captainLogin';
import CaptainSignUp from './pages/captainSignUp';
import UserProtectWrapper from './pages/userProtectorWrapper'
import UserLogout from './pages/userLogout';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start />}/>
        <Route path='/login' element={<UserLogin />}/>
        <Route path='/signup' element={<UserSignUp />}/>
        <Route path='/captainlogin' element={<CaptainLogin />}/>
        <Route path='/captainsignup' element={<CaptainSignUp />}/> 
        <Route path='/home'
          element={
            <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>
          } />
          <Route path='/logout' element={
            <UserLogout />
          } />
      </Routes>
    </div>
  )
}

export default App