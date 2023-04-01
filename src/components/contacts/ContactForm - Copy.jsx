import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import Datepicker from 'react-datepicker'
import { toast } from 'react-toastify'

const initialData = {
  firstName: '',
  lastName: '',
  email: '',
  profession: '',
  dateOfBirth: '',
  image: '',
}

const ContactForm = ({ addContact, contact, updateContact }) => {
  const [contact, setContact] = useState(initialData)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState(false)

  const { firstName, lastName, email, profession, dateOfBirth, image } = contact

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(contact)
    addContact(contact)

    //form validation
    const userError = {
      firstName: '',
      lastName: '',
      email: '',
      profession: '',
      age: '',
      image: '',
    }
    let isError = false

    if (firstName === '') {
      isError = true
      userError.firstName = 'Please input first name'
    } else if (firstName.length <= 1) {
      isError = true
      userError.firstName = 'Minimum 2 character'
    }

    if (lastName === '') {
      isError = true
      userError.lastName = 'Please input last name'
    } else if (lastName.length <= 1) {
      isError = true
      userError.lastName = 'Minimum 2 character'
    }

    const emailVal = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
    if (email === '') {
      isError = true
      userError.email = 'Please input email address'
    } else if (!emailVal) {
      isError = true
      userError.email = 'Invalid email address'
    }

    if (profession === '') {
      isError = true
      userError.profession = 'Please input profession'
    } else if (profession.length <= 1) {
      isError = true
      userError.profession = 'Minimum 2 character'
    }

    if (image === '') {
      isError = true
      userError.image = 'Please input profile picture link'
    }

    setErrors(userError)
    if (isError) return

    setSubmitted(true)
    setContact(initialData)
  }

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value })
  }
  return (
    <>
      <h2 className="text-center mt-5 mb-5">Add Contact</h2>
      {submitted && toast.success('Form submitted successfully')}
      <Form onSubmit={handleSubmit} noValidate>
        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="firstName" column>
              First Name :
            </Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Control
              type="firstName"
              name="firstName"
              id="firstName"
              placeholder="First name"
              value={firstName}
              onChange={handleChange}
            />
          </Col>

          <Col sm={3}></Col>
          <Col sm={9}>
            <p className="mt-2 text-danger">{errors.firstName}</p>
          </Col>

          <Col sm={3}>
            <Form.Label htmlFor="lastName" column>
              Last Name :
            </Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Control
              type="lastName"
              name="lastName"
              id="lastName"
              placeholder="Last name"
              value={lastName}
              onChange={handleChange}
            />
          </Col>
          <Col sm={3}></Col>
          <Col sm={9}>
            <p className="mt-2 text-danger">{errors.lastName}</p>
          </Col>
          <Col sm={3}>
            <Form.Label htmlFor="email" column>
              Email :
            </Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Control
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
            />
          </Col>
          <Col sm={3}></Col>
          <Col sm={9}>
            <p className="mt-2 text-danger">{errors.email}</p>
          </Col>
          <Col sm={3}>
            <Form.Label htmlFor="profession" column>
              Profession :
            </Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Select
              id="profession"
              value={profession}
              onChange={handleChange}
              aria-label="Select your profession">
              <option value="">Select your profession</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="engineer">Engineer</option>
              <option value="engineer">Programer</option>
            </Form.Select>
          </Col>
          <Col sm={3}></Col>
          <Col sm={9}>
            <p className="mt-2 text-danger">{errors.profession}</p>
          </Col>
          <Col sm={3}>
            <Form.Label htmlFor="image">Profile Picture :</Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Control
              type="text"
              name="image"
              id="image"
              placeholder="Profile picture link"
              value={image}
              onChange={handleChange}
            />
          </Col>
          <Col sm={3}></Col>
          <Col sm={9}>
            <p className="mt-2 text-danger">{errors.image}</p>
          </Col>
          <Col sm={3}>
            <Form.Label htmlFor="dateOfBirth" column>
              Date Of Birth :
            </Form.Label>
          </Col>
          <Col sm={9}>
            <Datepicker
              selected={dateOfBirth}
              // dateFormat="dd/mm/yyyy"
              showYearDropdown
              scrollableYearDropdown
              onChange={(date) => setContact({ ...contact, dateOfBirth: date })}
            />
          </Col>
          <Col sm={3}></Col>
          <Col sm={9}>
            <p className="mt-2 text-danger">{errors.dateOfBirth}</p>
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary" size="md">
          Add Contact
        </Button>
      </Form>
    </>
  )
}

export default ContactForm
