import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className="container h-100 pt-5">
      <h1>Sign Up</h1>
      <div className="d-flex flex-column h-100">
        <form>
          <div className="form-group">
            <label>Email</label>
            <input className="form-control" type="text" name="email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input className="form-control" type="password" name="password" />
          </div>
          <div className="form-group">
            <label>Password Confirmation</label>
            <input
              className="form-control"
              type="password"
              name="password_confirmation"
            />
          </div>
          <div>
            <button className="btn btn-primary btn-round">Submit</button>
          </div>
        </form>
        <div className="container text-center fixed-bottom pb-5">
          <div className="text-muted">Already have an Account?</div>
          <Link to="/sign-in">Sign-in</Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp
