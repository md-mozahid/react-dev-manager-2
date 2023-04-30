import { yupResolver } from '@hookform/resolvers/yup'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import Button from '../components/Button'
import { AuthContext } from '../context/AuthContext'

const schema = yup.object({
  username: yup
    .string()
    .min(3, 'Min 3 character')
    .required('User name is required'),
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
    // console.log(data)
    registerUser({
      username: data.username,
      email: data.email,
      password: data.password,
    })
    reset()
  }

  return (
    <div className="container">
      <h1>User Registration</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="inputTag"
          name="username"
          id="username"
          placeholder="User name*"
          // errors={errors}
          {...register('username')}
          defaultValue="muzahid"
        />
        <p className="errMsg">{errors.userName?.message}</p>

        <input
          className="inputTag"
          name="email"
          id="email"
          placeholder="Email*"
          // errors={errors}
          {...register('email')}
          defaultValue="ce.muzahid@gmail.com"
        />
        <p className="errMsg">{errors.email?.message}</p>

        <input
          className="inputTag"
          name="password"
          id="password"
          type="password"
          placeholder="Password*"
          // errors={errors}
          {...register('password')}
          defaultValue="Mm$221994"
        />
        <p className="errMsg">{errors.password?.message}</p>

        <input
          className="inputTag"
          name="confirmPassword"
          id="confirmPassword"
          type="password"
          placeholder="Confirm password*"
          // errors={errors}
          {...register('confirmPassword')}
          defaultValue="Mm$221994"
        />
        <p className="errMsg">{errors.confirmPassword?.message}</p>

        <Button type="submit" className="btn-m btn-fw">
          Register
        </Button>
        <div className="d-flex justify-content-center text-white mt-3">
          <p>
            Already have an account ? <Link className='' to="/login">Login</Link> instead
          </p>
        </div>
      </form>
    </div>
  )
}

export default RegistrationForm
