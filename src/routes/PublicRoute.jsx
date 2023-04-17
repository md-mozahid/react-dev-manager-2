import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const PublicRoute = ({ children }) => {
  const { user } = useContext(AuthContext)
  const location = useLocation()
  const loadedComponent = user ? (
    <Navigate to={location?.state?.from ? location?.state?.from : '/home'} />
  ) : (
    children
  )
  return <div>{loadedComponent}</div>
}

export default PublicRoute
