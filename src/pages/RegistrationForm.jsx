import { yupResolver } from '@hookform/resolvers/yup'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import Button from '../components/Button'
import Title from '../components/Title'
import { AuthContext } from '../context/AuthContext'

const schema = yup.object().shape({
  // firstName: yup
  //   .string()
  //   .min(2, 'Min 2 character')
  //   .required('Input first name'),
  // lastName: yup.string().min(2, 'Min 2 character').required('Input last name'),
  userName: yup.string().min(3, 'Min 2 character').required('Input last name'),
  email: yup.string().email().lowercase().required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6)
    .max(12)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
      'Min 6 Characters, Uppercase, Lowercase, Number and Special Character'
    ),

  confirmPassword: yup
    .string()
    .required('Password is required')
    .oneOf([yup.ref('password'), null], "Password don't match"),
})

// authentication



const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    isSubmitting,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const { registerUser } = useContext(AuthContext)
  
  const onSubmit = (data) => {
    console.log(data)
    registerUser({
      userName: data.userName,
      email: data.email,
      password: data.password,
    })
    reset()
  }

  return (
    <div className="container">
      <Title>User Registration</Title>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <input
          className="inputTag"
          type="text"
          placeholder="First name*"
          {...register('firstName')}
        />
        <p className="errMsg">{errors.firstName?.message}</p>

        <input
          className="inputTag"
          name="lastName"
          id="lastName"
          placeholder="Last name*"
          {...register('lastName')}
        />
        <p className="errMsg">{errors.lastName?.message}</p> */}

        <input
          className="inputTag"
          name="userName"
          id="userName"
          placeholder="User name*"
          {...register('userName')}
          defaultValue="muzahid"
        />
        <p className="errMsg">{errors.userName?.message}</p>

        <input
          className="inputTag"
          name="email"
          id="email"
          placeholder="Email*"
          {...register('email')}
          defaultValue="ce.muzahid@gmail.com"
        />
        <p className="errMsg">{errors.email?.message}</p>

        <input
          className="inputTag"
          name="password"
          id="password"
          placeholder="Password*"
          {...register('password')}
          defaultValue="Mm$221994"
        />
        <p className="errMsg">{errors.password?.message}</p>

        <input
          className="inputTag"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm Password*"
          {...register('confirmPassword')}
          defaultValue="Mm$221994"
        />
        <p className="errMsg">{errors.confirmPassword?.message}</p>

        <Button type="submit" className="btn-m btn-fw">
          Submit
        </Button>
        <div className="d-flex justify-content-center text-white mt-3">
          <p>
            Already have an account? <Link to="Login">Login</Link> instead
          </p>
        </div>
      </form>
    </div>
  )
}

export default RegistrationForm
