import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import Button from '../components/Button'
import Title from '../components/Title'
import { Link } from 'react-router-dom'

const schema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, 'Min 2 character')
    .required('Input first name'),
  lastName: yup.string().min(2, 'Min 2 character').required('Input last name'),
  email: yup.string().email().required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(4)
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

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const submitForm = (data) => {
    console.log(data)
    reset()
  }

  return (
    <div className="container">
      <Title>User Registration</Title>

      <form onSubmit={handleSubmit(submitForm)}>
        <input
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
        <p className="errMsg">{errors.lastName?.message}</p>

        <input
          className="inputTag"
          name="email"
          id="email"
          placeholder="Email*"
          {...register('email')}
        />
        <p className="errMsg">{errors.email?.message}</p>

        <input
          className="inputTag"
          name="password"
          id="password"
          placeholder="Password*"
          {...register('password')}
        />
        <p className="errMsg">{errors.password?.message}</p>

        <input
          className="inputTag"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm Password*"
          {...register('confirmPassword')}
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
