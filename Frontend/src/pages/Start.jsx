import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div className='bg-cover bg-bottom bg-[url(https://plus.unsplash.com/premium_photo-1736675591749-c2fc338f5953?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHRyYWZmaWMlMjBsaWdodCUyMHN0YW5kJTIwM2R8ZW58MHx8MHx8fDA%3D)] h-screen pt-8  w-full flex justify-between flex-col'>
      <img className='w-20 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <div className='bg-white py-4 px-4 pb-7'>
        <h2 className='text-3xl font-bold'>Get Started with uber</h2>
        <Link to='/login'  className="flex w-full bg-black text-white py-4 px-34 rounded-lg mt-3" >Continue</Link>
      </div>
    </div>
  )
}

export default Start