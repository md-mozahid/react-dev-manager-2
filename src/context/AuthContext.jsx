import React, { createContext, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import { axiosPublicInstance } from '../config/axios'

export const AuthContext = createContext()

// storage data to components
const loadedUser = JSON.parse(localStorage.getItem('user'))
const loadedToken = JSON.parse(localStorage.getItem('token'))

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(loadedUser ? loadedUser : null)
  const [token, setToken] = useState(loadedToken ? loadedToken : null)
  const navigate = useNavigate()
  const location = useLocation()

  // registration
  const registerUser = async (data) => {
    try {
      const response = await axiosPublicInstance.post(
        '/auth/local/register',
        data
      )
      const { user, jwt } = response.data
      // setting data to the local storage
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('token', JSON.stringify(jwt))
      // update state
      setUser(user)
      setToken(jwt)

      toast.success('Registration successful !')

      // redirecting the contact page
      navigate('/contact')
    } catch (err) {
      toast.error(err.response?.data?.error?.message)
    }
  }

  // login
  const login = async (data) => {
    try {
      const response = await axiosPublicInstance.post('/auth/local', data)
      const { user, jwt } = response.data
      // setting data to the local storage
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('token', JSON.stringify(jwt))
      // update state
      setUser(user)
      setToken(jwt)

      toast.success('Login successful !')

      // redirecting the contact page
      navigate(location?.state?.from ? location?.state?.from : '/contact')
    } catch (err) {
      toast.error(err.response?.data?.error?.message)
    }
  }

  // logout
  const logout = (data) => {
    // remove data from local storage
    localStorage.removeItem('user')
    localStorage.removeItem('token')

    // remove data from state
    setUser(null)
    setToken(null)

    toast.success('Logout successful !')
  }

  const value = {
    registerUser,
    login,
    logout,
    user,
    token,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
