import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { signIn } from '../../actions/AccountActions'

const SignIn = ({ signIn, account }) => {
  return (
    <div className="container h-100 pt-5">
      <h1>Sign In</h1>
      <div className="d-flex flex-column h-100">
        <form>
          <div className="form-group">
            <label>Email</label>
            <input className="form-control" type="text" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input className="form-control" type="password" />
          </div>
          <div>
            <button className="btn btn-primary btn-round">Submit</button>
          </div>
        </form>
        <div className="container text-center fixed-bottom pb-5">
          <div className="text-muted">Don't have an Account?</div>
          <Link to="/sign-up">Sign-up</Link>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    account: state.account.account,
  }
}

export default connect(mapStateToProps, { signIn })(SignIn)
