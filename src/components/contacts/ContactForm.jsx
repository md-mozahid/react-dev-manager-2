import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import FormTextInput from '../../layout/FormTextInput'

const schema = yup
  .object({
    firstName: yup
      .string()
      .required('FirstName is Required')
      .min(3, 'FirstName must be 3 or more in length '),
    lastName: yup
      .string()
      .required('LastName is Required')
      .min(3, 'LastName must be 3 or more in length '),
    email: yup
      .string()
      .required('email is Required')
      .email('Must be a valid email'),
    profession: yup
      .string()
      .required('Profession is Required')
      .oneOf(['developer', 'designer', 'marketer'])
      .min(3, 'Profession must be 3 or more in length '),
    bio: yup
      .string()
      .required('Bio is Required')
      .min(10, 'Bio must be 10 or more in length ')
      .max(300, 'Bio must be equal or less thant 300 character'),
    image: yup
      .string()
      .required('profile Image URL is Required')
      .url('Must be a valid URL'),
    gender: yup
      .mixed()
      .required('Gender is required')
      .oneOf(['male', 'female']),
  })
  .required()

function ContactForm({ addContact, updateContact, contact }) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const navigate = useNavigate()
  const defaultValue = {
    firstName: contact?.firstName || 'Ahnaf',
    lastName: contact?.lastName || 'Murtafi',
    email: contact?.email || 'murtafi@gmail.com',
    gender: contact?.gender || 'male',
    profession: contact?.profession || 'developer',
    bio: contact?.bio || 'All about myself, Modify of your own if necessary',
    image: contact?.image || 'https://randomuser.me/api/portraits/men/75.jpg',
    dateOfBirth:
      (contact?.dateOfBirth && new Date(contact?.dateOfBirth)) || new Date(),
  }

  const {
    firstName,
    lastName,
    email,
    gender,
    profession,
    bio,
    image,
    dateOfBirth,
  } = defaultValue

  const [birthYear, setBirthYear] = useState(
    dateOfBirth ? dateOfBirth : new Date()
  )

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        firstName: '',
        lastName: '',
        email: '',
        profession: '',
        bio: '',
        gender: 'male',
        image: '',
      })
    }
  }, [isSubmitSuccessful])

  useEffect(() => {
    setValue('dateOfBirth', birthYear)
  }, [birthYear])

  const onSubmit = (data) => {
    const id = contact?.id

    //adding contacts
    if (id) {
      toast.success('Contact is updated successfully')
      updateContact(data, id)
    } else {
      //show flash message
      toast.success('Contact is added successfully')
      addContact(data)
    }
    navigate('/contact')
  }

  return (
    <>
      <h2 className="text-center mt-3 mb-3">
        {contact?.id ? 'Edit Contact' : 'Add Contact'}
      </h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormTextInput
          name="firstName"
          label="First Name"
          placeholder="Enter Your First Name"
          errors={errors}
          register={register}
          defaultValue={firstName}
        />
        <FormTextInput
          name="lastName"
          label="Last Name"
          placeholder="Enter Your Last Name"
          errors={errors}
          register={register}
          defaultValue={lastName}
        />

        <FormTextInput
          name="email"
          label="Email"
          type="email"
          placeholder="Enter Your Email"
          errors={errors}
          register={register}
          defaultValue={email}
        />
        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="profession" column>
              Profession
            </Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Select
              {...register('profession')}
              id="profession"
              defaultValue={profession}
              isInvalid={errors?.profession}
              aria-label="Select your profession">
              <option value="" disabled>
                Select your profession
              </option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="marketer">Markerter</option>
            </Form.Select>

            <Form.Control.Feedback type="invalid" className="d-block">
              {errors?.profession?.message}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
        <FormTextInput
          name="image"
          label="Profile Picture"
          type="url"
          placeholder="Enter Profile picture URL"
          errors={errors}
          register={register}
          defaultValue={image}
        />
        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="dateOfBirth" column>
              Date of Birth
            </Form.Label>
          </Col>
          <Col sm={9}>
            <DatePicker
              selected={birthYear}
              name="dateOfBirth"
              id="dateOfBirth"
              placeholder="Enter your Date of Birth"
              maxDate={new Date()}
              showYearDropdown
              onChange={(date) => setBirthYear(date)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="gender" column>
              Gender{' '}
            </Form.Label>
          </Col>
          <Col xs="auto">
            <Form.Check
              type="radio"
              label="Male"
              value="male"
              defaultChecked={gender === 'male'}
              {...register('gender')}
            />
          </Col>
          <Col xs="auto">
            <Form.Check
              type="radio"
              label="Female"
              value="female"
              defaultChecked={gender === 'female'}
              {...register('gender')}
            />
          </Col>
          <Form.Control.Feedback type="invalid" className="d-block">
            {errors?.gender?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <FormTextInput
          name="bio"
          label="Bio"
          placeholder="Enter Your Bio"
          errors={errors}
          register={register}
          defaultValue={bio}
          as="textarea"
        />
        <Button
          variant="primary"
          size="md"
          type="submit"
          disabled={isSubmitting ? 'disabled' : ''}>
          {contact?.id ? 'Update Contact' : 'Add Contact'}
        </Button>
      </Form>
    </>
  )
}

export default ContactForm
