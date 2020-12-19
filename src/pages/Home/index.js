import React from 'react'
import { connect } from 'react-redux'
import { placeList } from '../../actions/PlaceActions'
import { getImageURL } from '../../helpers/Api'

import './styles.css'

const Home = ({ placeList }) => {
  const [placesHome, setPlacesHome] = React.useState([])

  React.useEffect(() => {
    placeList()
      .then(({ payload }) => {
        const newData = payload.data.data
        setPlacesHome(newData)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [placeList])

  return (
    <div>
      <h1>Home</h1>
      <div className="container-home">
        {placesHome.map((places) => (
          <figure key={places.id}>
            <img src={getImageURL(places.image)} alt={places.title} />
          </figure>
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
