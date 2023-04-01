import React, { useState } from 'react'
import Button from '../components/Button'
import Checkbox from '../components/Checkbox'
import Input from '../components/Input'
import Label from '../components/Label'
import Title from '../components/Title'

const initialData = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
}
export default function Register() {
  const [userData, setUserData] = useState(initialData)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault()

    const userError = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    }

    let isError = false

    if (firstName === '') {
      isError = true
      userError.firstName = 'First name is required !'
    }

    if (lastName === '') {
      isError = true
      userError.lastName = 'Last name is required !'
    }

    // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

    if (
      email === '' ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
    ) {
      isError = true
      userError.email = 'Email is required or input valid email address !'
    }
    if (password === '') {
      isError = true
      userError.password = 'Password is required !'
    }
    if (confirmPassword === '') {
      isError = true
      userError.confirmPassword = 'Confirm Password is required !'
    }

    setError(userError)
    if (isError) return

    setSubmitted(true)
    setUserData(initialData)
  }

  //get input value
  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    })
  }

  //destructure
  const { firstName, lastName, email, password, confirmPassword } = userData

  return (
    <div className="container">
      <Title>User Registration</Title>

      {submitted && <h3>Form submit successfully</h3>}

      <form onSubmit={handleSubmit} noValidate>
        <Label htmlFor="">First Name :</Label>
        <Input
          name="firstName"
          id="firstName"
          placeholder="First name*"
          value={firstName}
          onChange={handleChange}
        />
        <p className="errMsg">{error.firstName}</p>

        <Label htmlFor="">Last Name :</Label>
        <Input
          name="lastName"
          id="lastName"
          placeholder="Last name*"
          value={lastName}
          onChange={handleChange}
        />
        <p className="errMsg">{error.lastName}</p>

        <Label htmlFor="">Email :</Label>
        <Input
          name="email"
          id="email"
          placeholder="Email*"
          value={email}
          onChange={handleChange}
        />
        <p className="errMsg">{error.email}</p>

        <Label htmlFor="">Password :</Label>
        <Input
          name="password"
          id="password"
          placeholder="Password*"
          value={password}
          onChange={handleChange}
        />
        <p className="errMsg">{error.password}</p>

        <Label htmlFor="">Confirm Password :</Label>
        <Input
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm Password*"
          value={confirmPassword}
          onChange={handleChange}
        />
        <p className="errMsg">{error.confirmPassword}</p>

        <Label htmlFor="checkbox">
          <Checkbox /> I agree all term & conditions !
        </Label>

        <Button type="submit" className="btn-m btn-fw">
          Submit
        </Button>
      </form>
    </div>
  )
}
