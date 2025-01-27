import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserLogin from './pages/userLogin';
import UserSignUp from './pages/userSignUp';
import CaptainLogin from './pages/captainLogin';
import CaptainSignUp from './pages/captainSignUp';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<UserLogin />}/>
        <Route path='/signup' element={<UserSignUp />}/>
        <Route path='/captainlogin' element={<CaptainLogin />}/>
        <Route path='/captainsignup' element={<CaptainSignUp />}/> 
      </Routes>
    </div>
  )
}

export default App