import React from 'react'

import Layout from '../../Layouts/Manage'

const Create = () => {
  return (
    <Layout>
      <h1>Create Place</h1>
      <div>
        <form>
          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" name="label" />
          </div>
          <div className="form-group">
            <label>Url</label>
            <input type="text" className="form-control" name="url" />
          </div>

          <div>
            <button className="btn btn-primary btn-round">Submit</button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Create
