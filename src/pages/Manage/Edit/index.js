import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { placeGet, placeUpdate } from '../../../actions/PlaceActions'
import { getFormData } from '../../../helpers/form'
import Layout from '../../Layouts/Manage'
import FormGroup from '../../../components/FormGroup'

const Edit = ({ place, placeGet, placeUpdate }) => {
  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {
    placeGet(id)
  }, [id, placeGet])

  const submitHandler = (e) => {
    e.preventDefault()
    const data = getFormData(e)
    placeUpdate(id, data)
      .then(() => {
        history.push('/manage/places')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <Layout>
      <h1>Edit Place - Name</h1>
      <div>
        <form onSubmit={submitHandler}>
          <FormGroup label="Title" name="title" data={place} type="text" />
          <FormGroup
            label="Description"
            name="description"
            data={place}
            type="text"
          />

          <div>
            <button className="btn btn-primary btn-round">Submit</button>
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

export default connect(mapStateToProps, { placeGet, placeUpdate })(Edit)
