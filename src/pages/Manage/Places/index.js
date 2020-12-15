import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '../../Layouts/Manage'

const Places = () => {
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
      {[1, 2, 3, 4].map((places) => (
        <div className="pb-2 pt-2 p1-3 pr-3 d-flex flex-row justify-content-between">
          <div className="pr-3">
            <img src="https://via.placeholder.com/100" alt="Link Icon" />
          </div>
          <div className="align-self-center">
            <span className="text-primary clearfix">Place Title</span>
            <span className="text-primary clearfix">Place URL</span>
          </div>
          <div className="ml-auto p-2 clearfix">
            <Link to="#">Edit</Link>
            <button className="btn btn-clear">Delete</button>
          </div>
        </div>
      ))}
    </Layout>
  )
}

export default Places
