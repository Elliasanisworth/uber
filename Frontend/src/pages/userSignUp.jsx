import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const userSignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [userData, setUserData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullname:{
        firstname:firstname,
        lastname:lastname},
      email:email,
      password:password,
    })
    setEmail('')
    setPassword('')
    setFirstname('')
    setLastname('')
  }

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>  
    <div>
    <img className='w-20 mb-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
     <form onSubmit={(e) => {
       submitHandler(e);
     }} >
      <h3 className='text-lg font-medium mb-2'>Enter you'r name</h3>
      <div className='gap-3 flex mb-5'>
      <input 
       required 
       className='bg-[#eeee]  w-1/2 rounded px-4 py-2 border text-lg placholder:text-base' 
       type="text" 
       placeholder='Firstname'
       value={firstname}
        onChange={(e) => {
          setFirstname(e.target.value)
        }}
       />
      <input 
       required 
       className='bg-[#eeee] w-1/2 rounded px-4 py-2 border  text-lg placholder:text-base' 
       type="text" 
       placeholder='Lastname'
       value={lastname}
        onChange={(e) => {
          setLastname(e.target.value)
        }}
       />
      </div>
       <h3 className='text-lg font-medium mb-2'>Enter you'r email ?</h3>
       <input 
       required 
       className='bg-[#eeee] mb-6  rounded px-4 py-2 border w-full text-lg placholder:text-base' 
       type="email" 
       placeholder='email@example.com'
       value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
       />
       <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
       <input 
       required
       className='bg-[#eeee] mb-6  rounded px-4 py-2 border w-full text-lg placholder:text-base' 
       type="password" 
       placeholder='Password'
       value={password}
        onChange={(e) => {
          setPassword(e.target.value)
        }}
       />
       <button className='bg-black  text-white font-semibold mb-8  rounded px-4 py-2  w-full text-lg placholder:text-base'>Sign Up</button>

     </form>
       <p className='text-center'>Already have Account? <Link to='/login' className='text-blue-600'>Login Here</Link></p>
    </div>
    <div>
    <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
    Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
    </div>
   </div>
  )
}

export default userSignUp