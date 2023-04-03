import { createContext, useState } from 'react'
import { toast } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid'
import { UserData } from '../userData/UserData'

//create context
export const ContactContext = createContext()

//create provider
export const ContactProvider = ({ children }) => {
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

  const updateContact = (updatedContact, id) => {
    //update state
    const contactsWithUpdate = contacts.map((contact) => {
      if (contact.id === id) {
        // update
        return {
          id,
          ...updateContact,
        }
      } else {
        return contact
      }
    })
    setContacts(contactsWithUpdate)
  }

  const value = {
    contacts,
    addContact,
    deleteContact,
    updateContact,
  }
  return (
    <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
  )
}
