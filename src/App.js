import React from 'react';
 import './style.css';
import { Provider } from 'react-redux'
import store from './store'
import Form from './components/From'
import Card from './components/Card'
import { PersistGate } from 'redux-persist/integration/react'


import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link">Form</Link></li>
              <li><Link to={'/card'} className="nav-link">Card</Link></li>
            </ul>
          </nav>
          <hr />
          <Switch>
            <Route exact path='/' component={Form} />
            <Route exact path='/card' component={Card} />
          </Switch>
        </div>
      </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;



