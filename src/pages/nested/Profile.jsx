import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { Form, Button, ProgressBar } from 'react-bootstrap'
import { axiosPrivateInstance } from '../../config/Axios'
import { AuthContext } from '../../context/AuthContext'
// import Loader from '../components/Loader'

const uploadPercentage = (total, loaded) => {
  console.log(total, loaded)
  return Math.floor((total / loaded) * 100)
}

function Profile() {
  const { user, token } = useContext(AuthContext)
  const [file, setFile] = useState(null)
  const [imageURL, setImageURL] = useState(null)
  const [percentage, setPercentage] = useState(0)
  const [submitting, setSubmitting] = useState(false)
  const handleChange = (evt) => {
    console.log(evt.target.files)
    setFile(evt.target.files[0])
  }
  const handleSubmit = async (evt) => {
    evt.preventDefault()

    const data = {
      firstName: 'samim',
      lastName: 'Hasan',
      user: user.id,
    }
    const formData = new FormData()
    formData.append('files.profilePicture', file, file.name)
    formData.append('data', JSON.stringify(data))

    //at first you have to delete the image
    //update as usual

    //image upload alone
    //along  with resource creation
    //upload file to the server

    try {
      setSubmitting(true)
      const response = await axiosPrivateInstance(token).post(
        '/profiles?populate=*',
        formData,
        {
          onUploadProgress: (progress) => {
            const percentage = uploadPercentage(progress.total, progress.loaded)
            console.log(progress)
            console.log(percentage)
            setPercentage(percentage)
          },
        }
      )

      setImageURL(
        response.data.data.attributes?.profilePicture?.data?.attributes?.url
      )

      setSubmitting(false)
      console.log(response.data)
    } catch (err) {
      console.log(err)
    }
  }
  const { username, email } = user
  return (
    <>
      <h2>Profile Info</h2>
      <p>
        username : <em>{username}</em>
      </p>
      <p>
        email : <em>{email}</em>
      </p>
      {imageURL && <img src={imageURL} alt="profile image" />}
      {percentage}
      {percentage > 0 && submitting && (
        <ProgressBar striped animated variant="success" now={percentage} />
      )}

      <Form onSubmit={handleSubmit}>
        <label htmlFor="profilePicture">ProfilePicture: </label>
        <input
          type="file"
          accept="image/*"
          name="profilePicture"
          id="profilePicture"
          onChange={handleChange}
        />

        <Button type="submit" variant="primary" disabled={submitting}>
          Upload File
        </Button>
      </Form>
    </>
  )
}

export default Profile
