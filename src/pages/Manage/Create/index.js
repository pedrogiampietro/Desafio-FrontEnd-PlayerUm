import React from 'react'
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { placeCreate } from '../../../actions/PlaceActions'

import Layout from '../../Layouts/Manage'

const Create = ({ placeCreate }) => {
  const [image, setImage] = React.useState('')
  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [imagePreview, setImagePreview] = React.useState('')

  const history = useHistory()

  const handleSelectImages = (e) => {
    if (!e.target.files) {
      return
    }

    const selectedImage = e.target.files[0]
    setImage(selectedImage)
    const preview = URL.createObjectURL(selectedImage)
    setImagePreview(preview)
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('image', image)
    formData.append('title', title)
    formData.append('description', description)

    placeCreate(formData)
      .then(() => {
        history.push('/auth/manage')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <Layout>
      <h1>Create Place</h1>
      <div>
        <form onSubmit={submitHandler}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  className="form-control"
                  name={title}
                  onChange={(event) =>
                    setTitle(
                      event.target.value
                        .toLowerCase()
                        .split(' ')
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(' ')
                    )
                  }
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  onChange={(event) => setDescription(event.target.value)}
                />
              </div>

              <div>
                <button className="btn btn-primary btn-round">Submit</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="panel panel-default">
                <div className="panel-heading">Upload Place</div>
                <div className="panel-body">
                  Here you can post your account's place by uploading an image
                  file.
                  <br />
                  Image Upload rules:
                  <ul>
                    <li>The file size can not be bigger than 3 MB.</li>
                    <li>The image dimensions can't be bigger than 128x128.</li>
                    <li>The file format must be either PNG, GIF or JPEG.</li>
                  </ul>
                  <div className="form-group">
                    <label htmlFor="placeFile">
                      <span className="badge badge-primary">Choose File</span>
                    </label>
                    <input
                      type="file"
                      name="image"
                      id="placeFile"
                      onChange={handleSelectImages}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Upload
                  </button>
                  <Link to="/auth/manage">
                    <button type="button" className="btn btn-inverse">
                      Return
                    </button>
                  </Link>
                  <img src={imagePreview} alt="" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  )
}

const mapStateToProps = (state) => {
  return {
    place: state.place.place,
  }
}

export default connect(mapStateToProps, { placeCreate })(Create)
