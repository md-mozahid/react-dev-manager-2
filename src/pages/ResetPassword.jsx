import { yupResolver } from '@hookform/resolvers/yup'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import Button from '../components/Button'
import { AuthContext } from '../context/AuthContext'

const schema = yup.object({
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

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    isSubmitting,
  } = useForm({
    resolver: yupResolver(schema),
  })


  const onSubmit = (data) => {
    // console.log(data)
    registerUser({
      password: data.password,
    })
    reset()
  }

  return (
    <div className="container">
      <h1>Reset Password</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="inputTag"
          name="password"
          id="password"
          type="password"
          placeholder="Password*"
          // errors={errors}
          {...register('password')}
        />
        <p className="errMsg">{errors.password?.message}</p>

        <input
          className="inputTag"
          name="confirmPassword"
          id="confirmPassword"
          type="password"
          placeholder="Confirm Password*"
          // errors={errors}
          {...register('confirmPassword')}
        />
        <p className="errMsg">{errors.confirmPassword?.message}</p>

        <Button type="submit" className="btn-m btn-fw">
          Reset Password
        </Button>
      </form>
    </div>
  )
}

export default ResetPassword
