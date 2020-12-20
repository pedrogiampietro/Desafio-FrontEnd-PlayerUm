import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const Layout = ({ children, account }) => {
  if (!account) {
    return <Redirect to="/" />
  }

  return (
    <div className="layout">
      <div className="container">{children}</div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    account: state.account.account,
  }
}

export default connect(mapStateToProps, {})(Layout)
