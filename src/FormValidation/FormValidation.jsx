import React, { useState } from 'react'

const initialData = {
  userName: '',
  email: '',
  password: '',
}

const FormValidation = () => {
  const [userData, setUserData] = useState(initialData)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  // const [error, setError] = useState(false)

  // destructure
  const { userName, email, password } = userData

  // user error
  const userError = {
    userName: '',
    email: '',
    password: '',
  }

  // handle submit
  const handleSubmit = (evt) => {
    evt.preventDefault()

    // validation
    let isError = false

    if (userName === '') {
      isError = true
      userError.userName = 'Please fill the input value'
    }

    const emailVal = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
    if (email === '' || !emailVal) {
      isError = true
      userError.email = 'Please input valid email address'
    }

    const strongPassword =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i.test(
        password
      )

    if (password === '') {
      isError = true
      userError.password = 'Please fill the password field'
    } else if (!strongPassword) {
      isError = true
      userError.password =
        'min 8 character. 1lowercase, 1uppercase, 1number, 1special'
    }

    setSubmitted(true)
    setError(userError)
    if (isError) return

    setUserData(initialData)
  }

  // handle onchange value
  const handleChange = (evt) => {
    // console.log(evt.target.value)
    setUserData({ ...userData, [evt.target.name]: evt.target.value })
    setError({ ...error, [evt.target.name]: evt.target.value })
  }

  return (
    <div>
      <h1>Form Validation</h1>
      {submitted && <h3>Form submit successfully</h3>}
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="userName">User Name :</label>
          <input
            type="text"
            name="userName"
            placeholder="User name"
            onChange={handleChange}
          />
          {error.userName}
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          {error.email}
        </div>
        <div>
          <label htmlFor="password">Password :</label>
          <input
            type="text"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          {error.password}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default FormValidation
