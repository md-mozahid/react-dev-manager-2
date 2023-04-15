import React, { createContext, useState } from 'react'
import { axiosPublicInstance } from '../config/axios'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  const registerUser = async (data) => {
    try {
      const response = await axiosPublicInstance.post(
        '/auth/local/register',
        data
      )
      console.log(response.data)
    } catch (err) {
      console.log(err.response)
    }
    // console.log(data)
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
