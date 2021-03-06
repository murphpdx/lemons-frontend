import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/Home'
import Settings from './components/Settings'
import CarInfo from './components/CarInfo'

const wrappedComponent = (
  <Router basename='/'>
    <div>
      <Route path='/' exact component={Home} />
      <Route path='/settings' component={Settings} />
      <Route path='/carinfo' component={CarInfo} />
    </div>
  </Router>
)

const render = () => ReactDOM.render(
  wrappedComponent,
  document.getElementById('app'))
render()
