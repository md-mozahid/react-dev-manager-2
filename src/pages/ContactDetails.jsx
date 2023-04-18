import { format } from 'date-fns'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap'
import { FaPencilAlt, FaRegTrashAlt } from 'react-icons/fa'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ContactContext } from '../context/Contact.Context'

const ContactDetails = () => {
  const { contacts, deleteContact } = useContext(ContactContext)

  const [contact, setContact] = useState({})

  const navigate = useNavigate()
  const { id } = useParams()
  // hence server id is number, that why added + sign before id
  const foundContact = contacts.find((contact) => contact.id === +id)

  useEffect(() => {
    if (id && foundContact) {
      setContact(foundContact)
    }
  }, [id])
  const { firstName, lastName, email, profession, dateOfBirth, image } = contact
  const handleDelete = (id) => {
    deleteContact(id)
    navigate('/contact')
  }

  return (
    <>
      <h2 className="text-center mt-3 mb-3">Contact Details</h2>
      {Object.keys(contact).length === 0 ? (
        <p>No contact to show</p>
      ) : (
        <Card className="mt-3 shadow">
          <div className="d-flex center p-3">
            <Card.Img className="cardImg " src={image} />
            <Card.Body>
              <Card.Title>First Name : {firstName}</Card.Title>
              <Card.Subtitle>Last Name: {lastName}</Card.Subtitle>
              <ListGroup>
                <ListGroup.Item>Email :{email}</ListGroup.Item>
                <ListGroup.Item>Profession :{profession}</ListGroup.Item>
                <ListGroup.Item>
                  Date of Birth:{' '}
                  {dateOfBirth instanceof Object
                    ? format(dateOfBirth, 'dd/MM/yyyy')
                    : dateOfBirth}
                </ListGroup.Item>
              </ListGroup>
              <Card.Link as={Link} to={`/edit-contact/${id}`}>
                <Button variant="warning ms-3 mt-2" size="md">
                  <FaPencilAlt />
                </Button>
              </Card.Link>
              <Card.Link>
                <Button
                  variant="danger ms-3 mt-2"
                  size="md"
                  onClick={() => handleDelete(id)}>
                  <FaRegTrashAlt />
                </Button>
              </Card.Link>
            </Card.Body>
          </div>
        </Card>
      )}
    </>
  )
}

export default ContactDetails
