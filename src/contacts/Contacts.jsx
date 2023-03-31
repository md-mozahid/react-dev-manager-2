import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid'
import { UserData } from '../userData/UserData'
import Contact from './Contact'
import AddContact from './AddContact'
import { UserContext } from '../useContext/Context'

const Contacts = () => {
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
    <UserContext.Provider value={contacts}></UserContext.Provider>
      <AddContact addContact={addContact} />
      <h2 className="text-center">All Contacts</h2>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          deleteContact={deleteContact}
        />
      ))}
    </>
  )
}

export default Contacts
