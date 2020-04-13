import React from 'react';
import './App.css';
import Saved from './pages/Saved'
import Search from './pages/Search'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route absolute path="/" >
        </Route>
        <Route absolute path='/search' exact component={Search}>
          <Search />
        </Route>
        <Route absolute path="/saved" exact component={Saved}>
          <Saved />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
