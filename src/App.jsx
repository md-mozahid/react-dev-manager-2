import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Contacts from './components/contacts/Contacts'
import MainNavbar from './layout/MainNavbar'
import AddContact from './pages/AddContact'
import ContactDetails from './pages/ContactDetails'
import EditContact from './pages/EditContact'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import RegistrationForm from './pages/RegistrationForm'

function App() {
  return (
    <>
      <BrowserRouter>
        <MainNavbar />
        <Routes>
          <Route index element={<RegistrationForm />} />
          <Route path="home" element={<Home />} />
          <Route path="contact" element={<Contacts />} />
          <Route path="add-contact" element={<AddContact />} />
          <Route path="contacts/:id" element={<ContactDetails />} />
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
