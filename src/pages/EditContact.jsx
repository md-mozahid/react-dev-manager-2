import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import ContactForm from '../components/contacts/ContactForm'
import { ContactContext } from '../context/Contact.Context'

const EditContact = () => {
  const { contacts, updateContact } = useContext(ContactContext)
  const { id } = useParams()

  const foundContact = contacts.find((contact) => contact.id === id)
  return <ContactForm contact={foundContact} updateContact={updateContact} />
}

export default EditContact
