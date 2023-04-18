import React, { useContext } from 'react'
import { ContactContext } from '../../context/Contact.Context'
import Loader from '../../loader/Loader'
import Contact from './Contact'

const Contacts = () => {
  // destructure contacts
  const { contacts, loaded } = useContext(ContactContext)
  return (
    <>
      <h2 className="text-center">All Contacts</h2>
      {loaded ? (
        contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))
      ) : (
        <Loader />
      )}
    </>
  )
}

export default Contacts
