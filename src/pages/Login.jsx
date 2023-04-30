import { yupResolver } from '@hookform/resolvers/yup'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import Button from '../components/Button'
import Label from '../components/Label'
import Title from '../components/Title'
import { AuthContext } from '../context/AuthContext'

const schema = yup.object({
  email: yup.string().required('Email is required'),
  password: yup.string().required('Password is required'),
})

export default function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    isSubmitting,
  } = useForm({ resolver: yupResolver(schema) })

  const { login } = useContext(AuthContext)

  const onSubmit = (data) => {
    login({
      identifier: data.email,
      password: data.password,
    })
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
            {...register('email')}
            defaultValue="ce.muzahid2@gmail.com"
          />
          <p className="errMsg">{errors.email?.message}</p>

          <Label htmlFor="password">Password :</Label>
          <input
            className="inputTag"
            name="password"
            id="password"
            type="password"
            placeholder="Password*"
            {...register('password')}
            defaultValue="Mm$221994"
          />
          <p className="errMsg">{errors.password?.message}</p>

          <Button type="submit" className="btn-m btn-fw">
            Login
          </Button>
          <div className="d-flex justify-content-center gap-5 text-white mt-3">
            <p>
              Forgot password ? <Link to="/forgot-password">Click here</Link>
            </p>
            <p>
              New user ? <Link to="/register">Create account</Link>
            </p>
          </div>
          <div className=" text-white mt-2">
            <p>
              Reset password ? <Link to="/reset-password">Click here</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  )
}
