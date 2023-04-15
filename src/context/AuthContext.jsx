import React, { createContext, useState } from 'react'
import { AxiosPublicInstance } from '../config/Axios'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  const registerUser = async (data) => {
    try {
      const response = await AxiosPublicInstance.post(
        '/auth/local/register',
        data
      )
      console.log(response.data)
    } catch (err) {
      console.log(err.response)
    }
  }
  
  const login = (data) => {}
  const logOut = (data) => {}

  const value = {
    registerUser,
    login,
    logOut,
    user,
    token,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
