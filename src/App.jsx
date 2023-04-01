import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid'
import Contacts from './components/contacts/Contacts'
import MainNavbar from './layout/MainNavbar'
import AddContact from './pages/AddContact'
import EditContact from './pages/EditContact'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import RegistrationForm from './pages/RegistrationForm'
import { UserData } from './userData/UserData'

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

  const updateContact = (updatedContact, id) => {
    //update state
    const contactsWithUpdate = contacts.map((contact) => {
      if (contact.id === id) {
        // update
        return {
          ...updateContact,
        }
      } else {
        return contact
      }
    })
    setContacts(contactsWithUpdate)
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
          <Route
            path="add-contact"
            element={<AddContact addContact={addContact} />}
          />
          <Route
            path="edit-contact/:id"
            element={
              <EditContact contacts={contacts} updateContact={updateContact} />
            }
          />
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
