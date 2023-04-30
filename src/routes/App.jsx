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
import History from '../pages/nested/History'
import History2 from '../pages/nested/History2'
import Profile from '../pages/nested/Profile'
import Security from '../pages/nested/Security'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import ForgotPassword from '../pages/ForgotPassword'
import ResetPassword from '../pages/ResetPassword'

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
          }>
          <Route path="profile" element={<Profile />} />
          <Route path="history" element={<History />}>
            <Route path="history2" element={<History2 />} />
          </Route>
          <Route path="security" element={<Security />} />
        </Route>

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
        <Route path='forgot-password' element={<ForgotPassword />} />
        <Route path='reset-password' element={<ResetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer autoClose={1000} hideProgressBar="true" theme="colored" />
    </>
  )
}
export default App
