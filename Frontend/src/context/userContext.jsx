import React, {createContext, useState} from 'react'

export const userDataContext = createContext()

const UserContext = ({children}) => {

    const [user, setUser] = useState({
        email:'',
        fullname:{
            firstname:'',
            lastname:''
        }
    })
  return (
    <div>
        <userDataContext.Provider value={user}>
            {children}
        </userDataContext.Provider>
    </div>
  )
}

export default UserContext