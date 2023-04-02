import { createContext, useState } from 'react'
import { UserData } from '../userData/UserData'
import {toast} from 'react-toastify'

//create context
export const ContactContext = createContext()

//create provider
export const ContactProvider = ({ children }) => {
    const [contacts, setContacts] = useState(UserData)

    const deleteContact = (id) => {
      const updatedContacts = contacts.filter((contact) => contact.id !== id)
      setContacts(updatedContacts)

      toast.success('Delete successfully !', {
        autoClose: 1000,
        hideProgressBar: true,
        theme: 'colored',
      })
    }

    const value = {
        contacts,
        deleteContact
    }
  return (
    <ContactContext.Provider value={value}>
      {children}
    </ContactContext.Provider>
  )
}
