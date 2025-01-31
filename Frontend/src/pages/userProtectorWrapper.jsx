import React, {useContext, useEffect} from 'react'
import { UserDataContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const userProtectorWrapper = ({
    children
}) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { user, setUser } = useContext(UserDataContext)
    const [isLoading, setIsLoading] = React.useState(true)

  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      if(response .status === 200 ){
        setUser(response.data.user)
        setIsLoading(false)
      }
    })
    .catch(err => {
      console.log(err)
      localStorage.removeItem('token')
      navigate('/login')
    })
  },[ token ])

  if (isLoading){
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <>
    {children}
    </>
  )
}

export default userProtectorWrapper