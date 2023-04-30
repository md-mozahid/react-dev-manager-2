import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { axiosPrivateInstance } from '../config/Axios'
import { UserData } from '../userData/UserData'
import { formateContact } from '../utils/formateContact'
import { AuthContext } from './AuthContext'
import Reducer from './Reducer'
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  LOAD_CONTACT,
  UPDATE_CONTACT,
} from './Types'

//create context
export const ContactContext = createContext()

//create provider
export const ContactProvider = ({ children }) => {
  const [contacts, dispatch] = useReducer(Reducer, UserData)
  const [loaded, setLoaded] = useState(false)
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)

  useEffect(() => {
    ;(async () => {
      if (user) {
        await loadContacts()
      }
    })()
  }, [user])

  // load contacts from server
  const loadContacts = async () => {
    try {
      const response = await axiosPrivateInstance.get('/contacts')
      const loadedContacts = response.data.data.map((contact) =>
        formateContact(contact)
      )
      dispatch({ type: LOAD_CONTACT, payload: loadedContacts })
      setLoaded(true)
      // console.log(loadedContacts)
    } catch (err) {
      console.log(err.response)
    }
  }

  // add contact
  const addContact = async (contactData) => {
    contactData = {
      author: user.id,
      ...contactData,
    }
    try {
      const response = await axiosPrivateInstance.post('/contacts', {
        data: contactData,
      })
      // dispatch
      const contact = formateContact(response.data.data)
      dispatch({ type: ADD_CONTACT, payload: contact })

      // toast message
      toast.success('Contact is added successfully')
      // redirect to contact
      navigate('/contact')
      console.log(response.data)
    } catch (err) {
      console.log(err.response)
    }

    toast.success('Contact add successfully !')
  }

  // delete contact
  const deleteContact = async (id) => {
    try {
      const response = await axiosPrivateInstance.delete(`/contacts/${id}`)
      // console.log(response.data)
      dispatch({ type: DELETE_CONTACT, payload: response.data.data.id })
    } catch (err) {
      console.log(err.response)
    }

    toast.success('Delete successfully !')
  }

  // update contact
  const updateContact = (updatedContact, id) => {
    dispatch({ type: UPDATE_CONTACT, payload: { id, updatedContact } })
    toast.success('Contact is updated successfully')
  }

  const value = {
    contacts,
    addContact,
    deleteContact,
    updateContact,
    loaded,
  }
  return (
    <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
  )
}
