import React from 'react'
import { useParams } from 'react-router-dom'
import ContactForm from '../components/contacts/ContactForm'
const EditContact = ({contacts, updateContact}) => {
  const {id} = useParams()
  // console.log(id)
  const foundContact = contacts.find(contact => contact.id === id)
  return <ContactForm contact={foundContact} updateContact={updateContact}/>
}

export default EditContact
