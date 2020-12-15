import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ManagePlaces from './pages/Manage/Places'
import ManagePlacesCreate from './pages/Manage/Create'
import ManagePlacesEdit from './pages/Manage/Edit'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul className="list-group list-group-horizontal">
            <li className="list-group-item">
              <Link to="/sign-in">Sign-in</Link>
            </li>
            <li className="list-group-item">
              <Link to="/sign-up">Sign-up</Link>
            </li>
            <li className="list-group-item">
              <Link to="/manage/places/create">Create Place</Link>
            </li>
            <li className="list-group-item">
              <Link to="/manage/places/edit">Edit Place</Link>
            </li>
            <li className="list-group-item">
              <Link to="/manage/places">Places</Link>
            </li>
          </ul>
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
          <Route path="/"></Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
