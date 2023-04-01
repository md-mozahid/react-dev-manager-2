import React from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../useContext/Context'
import AddContact from './AddContact'

const EditContact = () => {
  const { contacts } = UserContext()
  console.log(contacts)
  const { id } = useParams()

  return <AddContact />
}

export default EditContact
