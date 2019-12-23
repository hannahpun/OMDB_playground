import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'sass/App.scss';


import Content from 'Pages/Content';
import Home from 'Pages/Home';
import MyContent from 'Pages/MyContent';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <nav className="nav container">
          <Link to="/">Home</Link>
          <Link to="/mycontent">My Content</Link>
        </nav>
      </header>
      <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/mycontent">
              <MyContent />
            </Route>
            <Route path="/content/:id">
              <Content />
            </Route>
            <Route path="/page/:pageId">
              <Home />
            </Route>
          </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
