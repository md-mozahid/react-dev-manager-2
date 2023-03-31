import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import Button from '../components/Button'
import Label from '../components/Label'
import Title from '../components/Title'

const schema = yup.object({
  email: yup
    .string()
    .email('Must be valid email')
    .lowercase()
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
      'Min 6 Characters, Uppercase, Lowercase, Number and Special Character'
    ),
})

export default function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    isSubmitting,
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }

  return (
    <>
      <div className="container">
        <Title>User Login</Title>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Label htmlFor="email">Email :</Label>

          <input
            className="inputTag"
            name="email"
            id="email"
            placeholder="Email*"
            errors={errors}
            {...register('email')}
          />

          <Label htmlFor="password">Password :</Label>
          <input
            className="inputTag"
            name="password"
            id="password"
            placeholder="Password*"
            {...register('password')}
          />

          <Button type="submit" className="btn-m btn-fw">
            Login
          </Button>
          <div className="d-flex justify-content-center gap-5 text-white mt-3">
            <p>
              Forgot password <a href="">Click here</a>
            </p>
            <p>
              New user ! <Link to="createAcc">Create account</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  )
}
