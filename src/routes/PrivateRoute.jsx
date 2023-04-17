import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext)
  const location = useLocation()
  const loadedComponent = user ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }} />
  )
  return <div>{loadedComponent}</div>
}

export default PrivateRoute
