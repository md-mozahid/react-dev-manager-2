import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Contacts from '../components/contacts/Contacts'
import MainNavbar from '../layout/MainNavbar'
import AddContact from '../pages/AddContact'
import ContactDetails from '../pages/ContactDetails'
import Dashboard from '../pages/Dashboard'
import EditContact from '../pages/EditContact'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import RegistrationForm from '../pages/RegistrationForm'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

function App() {
  return (
    <>
      <MainNavbar />
      <Routes>
        <Route index element={<RegistrationForm />} />
        <Route path="home" element={<Home />} />
        <Route
          path="contact"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
        <Route
          path="add-contact"
          element={
            <PrivateRoute>
              <AddContact />
            </PrivateRoute>
          }
        />
        <Route
          path="contacts/:id"
          element={
            <PrivateRoute>
              <ContactDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="edit-contact/:id"
          element={
            <PrivateRoute>
              <EditContact />
            </PrivateRoute>
          }
        />
        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute>
              <RegistrationForm />
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer autoClose={1000} hideProgressBar="true" theme="colored" />
    </>
  )
}
export default App
