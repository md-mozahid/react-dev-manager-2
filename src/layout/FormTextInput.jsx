import React from 'react'
import { Form, Col, Row } from 'react-bootstrap'
export default function FormTextInput({
  name,
  label,
  placeholder,
  type = 'text',
  errors,
  register,
  defaultValue,
  ...rest
}) {
  return (
    <Form.Group as={Row} className='mb-3'>
      <Col sm={3}>
        <Form.Label htmlFor={name} column>
          {label}
        </Form.Label>
      </Col>
      <Col sm={9}>
        <Form.Control
          type={type}
          id={name}
          defaultValue={defaultValue}
          {...register(name)}
          isInvalid={errors?.name}
          placeholder={placeholder}
          {...rest}
        />
        <Form.Control.Feedback type='invalid' className='d-block'>
          {errors[name]?.message}
        </Form.Control.Feedback>
      </Col>
    </Form.Group>
  )
}
