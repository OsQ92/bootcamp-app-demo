import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Gallery from './Components/Gallery';
import EmailForm from './Components/EmailForm';

import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/email" component={EmailForm} />
          <Route render={() => "404 - not found!"} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
