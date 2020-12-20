import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'
import TokenRefresher from './components/TokenRefresher'

import './assets/css/bootstrap.min.css'
import './assets/css/now-ui-kit.min.css'
import 'bootstrap/js/src/modal'
import 'bootstrap/js/src/dropdown'

ReactDOM.render(
  <Provider store={store}>
    <TokenRefresher />
    <App />
  </Provider>,
  document.getElementById('root')
)
