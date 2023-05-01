import React, { useContext } from 'react'
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { ContactContext } from '../context/Contact.Context'

const ContactList = () => {
  const { userContacts, loaded, setTriggerDelete } = useContext(AuthContext)
  const { deleteContact } = useContext(ContactContext)

  const contactDelete = (id) => {
    deleteContact(id)
    setTriggerDelete(true)
  }
  return (
    <>
      {loaded && (
        <Table striped="columns">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Profession</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {userContacts.map((contact) => {
              const { firstName, lastName, email, profession, id } = contact
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{firstName}</td>
                  <td>{lastName}</td>
                  <td>{email}</td>
                  <td>{profession}</td>
                  <td>
                    <Button
                      variant="info"
                      as={Link}
                      to={`/edit-contact/:${id}`}>
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button variant="danger" onClick={() => contactDelete(id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      )}
    </>
  )
}

export default ContactList
