import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import Button from '../components/Button'
import Label from '../components/Label'
import Title from '../components/Title'

const schema = yup.object({
  email: yup.string().required('Email is required'),
})

export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    isSubmitting,
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = (data) => {}

  return (
    <>
      <div className="container">
        <Title>Forgot Password</Title>
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

          <Button type="submit" className="btn-m btn-fw">
            Forgot Password
          </Button>
        </form>
      </div>
    </>
  )
}
