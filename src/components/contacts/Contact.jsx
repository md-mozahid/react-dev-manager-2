import { format } from 'date-fns'
import { useContext } from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap'
import { FaEye, FaRegTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { ContactContext } from '../../context/Contact.Context'

const Contact = ({ contact }) => {
  const { deleteContact } = useContext(ContactContext)

  const {
    id,
    firstName,
    lastName,
    email,
    profession,
    dateOfBirth,
    bio,
    gender,
    image,
  } = contact
  return (
    <>
      <Card className="mt-3 shadow">
        <div className="d-flex center p-3">
          <Card.Img className="cardImg " src={image} />
          <Card.Body>
            <Card.Title>First Name : {firstName}</Card.Title>
            <Card.Subtitle>Last Name: {lastName}</Card.Subtitle>
            <Card.Text>Bio: {bio}</Card.Text>
            <ListGroup>
              <ListGroup.Item>Email :{email}</ListGroup.Item>
              <ListGroup.Item>Profession :{profession}</ListGroup.Item>
              <ListGroup.Item>Gender: {gender}</ListGroup.Item>
              <ListGroup.Item>
                Date of Birth:{' '}
                {dateOfBirth instanceof Object
                  ? format(dateOfBirth, 'dd/MM/yyyy')
                  : dateOfBirth}
              </ListGroup.Item>
            </ListGroup>
            <Card.Link as={Link} to={`/contacts/${id}`}>
              <Button variant="warning ms-3 mt-2" size="md">
                <FaEye />
              </Button>
            </Card.Link>
            <Card.Link>
              <Button
                variant="danger ms-3 mt-2"
                size="md"
                onClick={() => deleteContact(id)}>
                <FaRegTrashAlt />
              </Button>
            </Card.Link>
          </Card.Body>
        </div>
      </Card>
    </>
  )
}

export default Contact
