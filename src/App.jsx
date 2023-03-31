import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import AddContact from './contacts/AddContact'
import Contacts from './contacts/Contacts'
import EditContact from './contacts/EditContact'
import About from './layout/About'
import Home from './layout/Home'
import Login from './layout/Login'
import MainNavbar from './layout/MainNavbar'
import NotFound from './layout/NotFound'
import RegistrationForm from './layout/RegistrationForm'

function App() {
  return (
    <>
      <BrowserRouter>
        <MainNavbar />
        <Routes>
          <Route index element={<RegistrationForm />} />
          <Route path="home" element={<Home />} />
          <Route path="contact" element={<Contacts />} />
          <Route path="about" element={<About />} />
          <Route path="add-contact" element={<AddContact />} />
          <Route path="edit-contact/:id" element={<EditContact />} />
          <Route path="login" element={<Login />} />
          <Route path="Register" element={<RegistrationForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  )
}
export default App
