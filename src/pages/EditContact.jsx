import React from 'react'
import { useParams } from 'react-router-dom'
import ContactForm from '../components/contacts/ContactForm'
import { UserContext } from '../useContext/Context'

const EditContact = () => {
  const { contacts } = UserContext()
  console.log(contacts)
  const { id } = useParams()

  return <ContactForm />
}

export default EditContact
