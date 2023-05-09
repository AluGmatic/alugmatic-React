import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Me from './views/me'
import Home from './views/home'
import MyArt from './views/my-art'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Me} exact path="/me" />
        <Route component={Home} exact path="/" />
        <Route component={MyArt} exact path="/my-art" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
