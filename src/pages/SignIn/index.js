import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { signIn } from '../../actions/AccountActions'
import { getFormData } from '../../helpers/form'

const submitHandler = (e) => {
  e.preventDefault()
  const data = getFormData(e)
  console.log(data)
  signIn(data)
}

const SignIn = ({ signIn }) => {
  return (
    <div className="container h-100 pt-5">
      <h1>Sign In</h1>
      <div className="d-flex flex-column h-100">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label>Email</label>
            <input className="form-control" type="text" name="email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input className="form-control" type="password" name="password" />
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
