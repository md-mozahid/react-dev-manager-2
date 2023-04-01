import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import AddContact from './contacts/AddContact'
import Contacts from './contacts/Contacts'
import EditContact from './contacts/EditContact'
import About from './layout/About'
import Home from './layout/Home'
import Login from './layout/Login'
import MainNavbar from './layout/MainNavbar'
import NotFound from './layout/NotFound'
import RegistrationForm from './layout/RegistrationForm'
import { UserData } from './userData/UserData'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [contacts, setContacts] = useState(UserData)

  const addContact = (contact) => {
    let contactToAdd = {
      id: uuidv4(),
      ...contact,
    }
    setContacts([contactToAdd, ...contacts])
    toast.success('Contact add successfully !', {
      autoClose: 1000,
      hideProgressBar: true,
      theme: 'colored',
    })
  }

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id)
    setContacts(updatedContacts)

    toast.success('Delete successfully !', {
      autoClose: 1000,
      hideProgressBar: true,
      theme: 'colored',
    })
  }

  return (
    <>
      <BrowserRouter>
        <MainNavbar />
        <Routes>
          <Route index element={<RegistrationForm />} />
          <Route path="home" element={<Home />} />
          <Route
            path="contact"
            element={
              <Contacts contacts={contacts} deleteContact={deleteContact} />
            }
          />
          <Route path="about" element={<About />} />
          <Route
            path="add-contact"
            element={<AddContact addContact={addContact} />}
          />
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
