import React, {useContext, useEffect, useState} from 'react'
import { CaptainDataContext } from '../context/captainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainProtectorWrapper = ({
    children
}) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { captain, setCaptain } = useContext(CaptainDataContext)
    const [isLoading, setIsLoading] = React.useState(true)

  useEffect(() => {
    if (!token) {
      navigate('/captainlogin')
    }
  },[ token ])

  axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`,{
    headers: {
        authorization: `Bearer ${token}`
    }
  }).then((response) => {
    if (response.status === 200) {
      setCaptain(response.data.captain)
      setIsLoading(false)
    }
  })
  .catch(err => {
    console.log(err)
    localStorage.removeItem('token')
    navigate('/captainlogin')
  })

  if (isLoading) {
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

export default CaptainProtectorWrapper