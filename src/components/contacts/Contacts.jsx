import React, { useContext } from 'react'
import Contact from './Contact'
import { ContactContext } from '../../context/Contact.Context'

const Contacts = () => {
  // destructure contacts
  const {contacts} = useContext(ContactContext)
  return (
    <>
      <h2 className="text-center">All Contacts</h2>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          // deleteContact={deleteContact}
        />
      ))}
    </>
  )
}

export default Contacts
