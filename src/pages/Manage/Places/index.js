import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { placeListInAccount } from '../../../actions/PlaceActions'
import { getImageURL } from '../../../helpers/Api'

import Layout from '../../Layouts/Manage'

const Places = ({ placeListInAccount }) => {
  const [placesList, setPlacesList] = React.useState([])

  React.useEffect(() => {
    placeListInAccount()
      .then(({ payload }) => {
        const newData = payload.data.data
        setPlacesList(newData)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [placeListInAccount])

  return (
    <Layout>
      <div className="row">
        <div className="col">
          <h1>Places</h1>
        </div>
        <div className="col text-right align-self-bottom pt-2">
          <Link to="/manage/places/create" className="btn btn-primary">
            Add
          </Link>
        </div>
      </div>
      {placesList.map((places) => (
        <div key={places.id} className="card mr-3" style={{ width: '20rem' }}>
          <img
            className="card-img-top"
            src={getImageURL(places.image)}
            alt={places.title}
          />
          <div className="card-body">
            <h4 className="card-title">{places.title}</h4>
            <p className="card-text">{places.description}</p>
            <span className="btn btn-primary">Edit</span>
            <span className="btn btn-secondary">Delete</span>
          </div>
        </div>
      ))}
    </Layout>
  )
}

const mapStateToProps = (state) => {
  return {
    place: state.place.place,
  }
}

export default connect(mapStateToProps, { placeListInAccount })(Places)
