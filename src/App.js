import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ManagePlaces from './pages/Manage/Places'
import ManagePlacesCreate from './pages/Manage/Create'
import ManagePlacesEdit from './pages/Manage/Edit'
import Home from './pages/Home'
import Ranking from './pages/Ranking'

import { initAccount, signOut } from './actions/AccountActions'
import { FiLogOut } from 'react-icons/fi'

const App = ({ initAccount, account, signOut }) => {
  React.useEffect(() => {
    initAccount()
  }, [initAccount])

  const signOutHandler = (e) => {
    e.preventDefault()
    signOut()
  }

  return (
    <BrowserRouter>
      <div>
        <nav className="navbar navbar-expand-lg bg-primary">
          <div className="container">
            <Link className="navbar-brand" to="/">
              PlayerUm
            </Link>

            <div className="collapse navbar-collapse" id="example-navbar">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    <p>Home</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ranking">
                    <p>Ranking</p>
                  </Link>
                </li>
                {account ? null : (
                  <li className="nav-item">
                    <a className="nav-link" href="/sign-up">
                      <p>Sign-up</p>
                    </a>
                  </li>
                )}
                <li className="nav-item">
                  <a className="nav-link" href="/sign-in">
                    {account ? 'My Account' : 'Sign-in'}
                  </a>
                </li>
                {account ? (
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      id="navbarDropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <p>Manage</p>
                    </Link>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <Link className="dropdown-item" to="/manage/places">
                        Manage
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="/manage/places/create"
                      >
                        Create Places
                      </Link>
                    </div>
                  </li>
                ) : null}
                {account ? (
                  <li className="nav-item ml-4" onClick={signOutHandler}>
                    <span className="nav-link">
                      <FiLogOut size={24} color="#ffff" />
                    </span>
                  </li>
                ) : null}
              </ul>
            </div>
          </div>
        </nav>

        <Switch>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/manage/places/create">
            <ManagePlacesCreate />
          </Route>
          <Route path="/manage/places/edit/:id">
            <ManagePlacesEdit />
          </Route>
          <Route path="/manage/places">
            <ManagePlaces />
          </Route>
          <Route path="/ranking">
            <Ranking />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => {
  return { account: state.account.account }
}

export default connect(mapStateToProps, { initAccount, signOut })(App)
