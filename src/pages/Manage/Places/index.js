import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  placeListInAccount,
  setPlaceToRemove,
  placeRemove,
} from '../../../actions/PlaceActions'

import { getImageURL } from '../../../helpers/Api'
import Layout from '../../Layouts/Manage'
import './styles.css'

const Places = ({
  placeListInAccount,
  setPlaceToRemove,
  placeToRemove,
  placeRemove,
}) => {
  const [placesList, setPlacesList] = React.useState([])

  const [postInteraction, setPostInteraction] = React.useState(false)

  function interaction() {
    setPostInteraction(!postInteraction)
  }

  React.useEffect(() => {
    placeListInAccount()
      .then(({ payload }) => {
        const newData = payload.data.data
        setPlacesList(newData)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [placeListInAccount, postInteraction])

  const cancelDelete = (e) => setPlaceToRemove(null)
  const confirmDelete = async (e) => {
    if (placeToRemove) {
      await placeRemove(placeToRemove)
      interaction()
    }
  }

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
      {placesList.map((mapPlace) => {
        const deleteClick = (e) => setPlaceToRemove(mapPlace)
        const border =
          placeToRemove && placeToRemove.id === mapPlace.id
            ? 'border border-danger rounded'
            : 'border border-transparent'

        return (
          <div
            key={mapPlace.id}
            className={`card mr-3 ${border}`}
            style={{ width: '20rem' }}
          >
            <img
              className="card-img-top"
              src={getImageURL(mapPlace.image)}
              alt={mapPlace.title}
            />
            <div className="card-body">
              <h4 className="card-title">{mapPlace.title}</h4>
              <p className="card-text">{mapPlace.description}</p>
              <Link to={`/manage/places/edit/${mapPlace.id}`}>
                <span className="btn btn-primary">Edit</span>
              </Link>
              <button className="btn btn-secondary" onClick={deleteClick}>
                Delete
              </button>
            </div>
          </div>
        )
      })}
      {placeToRemove ? (
        <div className="alert alert-danger rounded float-center shadow-bold">
          <h4 className="alert-heading">Delete Confirmation!</h4>
          <p>Are you sure you want to delete, this action cannot be undone.</p>
          <hr />
          <div className="d-flex justify-content-between">
            <button className="btn btn-outline-light" onClick={cancelDelete}>
              Cancel
            </button>
            <button className="btn btn-danger" onClick={confirmDelete}>
              Delete
            </button>
          </div>
        </div>
      ) : null}
    </Layout>
  )
}

const mapStateToProps = (state) => {
  return {
    places: state.place.places,
    placeToRemove: state.place.placeToRemove,
  }
}

export default connect(mapStateToProps, {
  placeListInAccount,
  setPlaceToRemove,
  placeRemove,
})(Places)
