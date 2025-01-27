import React, {useState} from 'react'
import { Link } from 'react-router-dom';
const userLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      email:email,
      password:password
    })
    setEmail('')
    setPassword('')
  }

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>  
     <div>
     <img className='w-20 mb-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <form onSubmit={(e) => {
        submitHandler(e);
      }} >
        <h3 className='text-lg font-medium mb-2'>What is you'r email ?</h3>
        <input 
        required 
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
        className='bg-[#eeee] mb-7  rounded px-4 py-2 border w-full text-lg placholder:text-base' 
        type="email" 
        placeholder='email@example.com'/>
        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
        <input 
        required
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
        }}
        className='bg-[#eeee] mb-7  rounded px-4 py-2 border w-full text-lg placholder:text-base' 
        type="password" 
        placeholder='Password'/>
        <button className='bg-black  text-white font-semibold mb-8  rounded px-4 py-2  w-full text-lg placholder:text-base'>Login</button>

      </form>
        <p className='text-center'>New here? <Link to='/signUp' className='text-blue-600'>Create new Account</Link></p>
     </div>
     <div>
      <Link to='/captainLogin' className='bg-[#49a078] flex items-center justify-center  text-white font-semibold mb-7  rounded px-4 py-2  w-full text-lg placholder:text-base'>Sign in as Captain</Link>
     </div>
    </div>
  )
}

export default userLogin