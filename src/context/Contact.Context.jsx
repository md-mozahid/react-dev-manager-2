import { createContext, useReducer } from 'react'
import { toast } from 'react-toastify'
import { UserData } from '../userData/UserData'
import Reducer from './Reducer'
import { ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT } from './Types'

//create context
export const ContactContext = createContext()

//create provider
export const ContactProvider = ({ children }) => {
  const [contacts, dispatch] = useReducer(Reducer, UserData)

  const addContact = (contact) => {
    dispatch({ type: ADD_CONTACT, payload: contact })

    toast.success('Contact add successfully !')
  }

  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id })

    toast.success('Delete successfully !')
  }

  const updateContact = (updatedContact, id) => {
    dispatch({ type: UPDATE_CONTACT, payload: { id, updatedContact } })
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
