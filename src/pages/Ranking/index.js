import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signIn } from '../../actions/AccountActions'
import { rankingList } from '../../actions/PlaceActions'
import './styles.css'

const Ranking = ({ rankingList }) => {
  const [rank, setRank] = React.useState([])
  const [pageInitial, setPageInitial] = React.useState(0)
  const [placesPerPage] = React.useState(10)

  React.useEffect(() => {
    rankingList({
      page: pageInitial,
    })
      .then(({ payload }) => {
        const newData = payload.data.data
        setRank(newData)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [rankingList, pageInitial])

  return (
    <div className="container h-100 pt-5">
      <h1>Ranking</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Likes</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {rank.map((props, index) => (
            <tr key={props.id}>
              <th scope="row"> {pageInitial * placesPerPage + index + 1}</th>
              <td>
                <Link to="#">{props.title}</Link>
              </td>
              <td>{props.likes_count.length}</td>
              <td>{props.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="row justify-content-center pb-5">
        <ul className="pagination my-4">
          {pageInitial <= 0 ? (
            <li className="page-item">
              <button
                className="page-link disabled mr-3"
                aria-label="Previous"
                onClick={(e) => setPageInitial(pageInitial - 1)}
                disabled
              >
                &#8249;
              </button>
            </li>
          ) : (
            <li className="page-item">
              <button
                className="page-link round mr-3"
                aria-label="Previous"
                onClick={(e) => setPageInitial(pageInitial - 1)}
              >
                &#8249;
              </button>
            </li>
          )}

          {rank.length >= 10 ? (
            <li className="page-item">
              <button
                className="page-link"
                aria-label="Next"
                onClick={() => setPageInitial(pageInitial + 1)}
              >
                &#8250;
              </button>
            </li>
          ) : (
            <li className="page-item">
              <button
                className="page-link disabled"
                disabled
                onClick={() => setPageInitial(pageInitial + 1)}
              >
                &#8250;
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    place: state.place.place,
  }
}

export default connect(mapStateToProps, { rankingList })(Ranking)
