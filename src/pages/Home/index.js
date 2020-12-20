import React from 'react'
import { connect } from 'react-redux'
import { placeList } from '../../actions/PlaceActions'
import { getImageURL } from '../../helpers/Api'

import LikeDeslikes from '../../components/LikeDeslikes'
import { RiAddCircleLine } from 'react-icons/ri'

import './styles.css'

const Home = ({ placeList }) => {
  const [placesHome, setPlacesHome] = React.useState([])

  const [postInteraction, setPostInteraction] = React.useState(false)

  function interaction() {
    setPostInteraction(!postInteraction)
  }

  React.useEffect(() => {
    placeList()
      .then(({ payload }) => {
        const newData = payload.data.data
        setPlacesHome(newData)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [placeList, postInteraction])

  return (
    <div>
      <h1>Home</h1>
      <div className="container-home">
        {placesHome.map((places, index) => (
          <div key={places.id}>
            <figure>
              <img src={getImageURL(places.image)} alt={places.title} />
              <span
                className="moreIcon"
                data-toggle="modal"
                data-target={`#exampleModal${index}`}
              >
                <RiAddCircleLine size={45} color="#ffff" />
              </span>
            </figure>
            <>
              {/* Modal */}
              <div
                className="modal fade"
                id={`exampleModal${index}`}
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLongTitle">
                        {places.title}
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <img src={getImageURL(places.image)} alt={places.title} />

                      <h5 className="description mt-3">{places.description}</h5>

                      <div className="container">
                        <h3 className="title">{places.title}</h3>
                        <p className="category">Location</p>

                        <div className="row">
                          <div className="col-4">
                            <div className="social-description">
                              <LikeDeslikes
                                id={places.id}
                                likes_count={places.likes_count}
                                interaction={interaction}
                              />
                              <p>Likes</p>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="social-description">
                              <h2>26</h2>
                              <p>Ranking</p>
                            </div>
                          </div>
                          <div className="col-4">
                            {' '}
                            <div className="social-description">
                              <h2>48</h2>
                              <p>Bookmarks</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </div>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    place: state.place.place,
  }
}

export default connect(mapStateToProps, { placeList })(Home)
