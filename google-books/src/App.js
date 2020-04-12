import React from 'react';
import './App.css';
import Saved from './pages/Saved'
import Search from './pages/Search'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";


function App() {
  return (
    <Router>
      <Switch>
        <Route absolute path="/">
          <Navbar />
          <Search />
        </Route>
        <Route absolute path="/saved">
          <Navbar />
          <Saved />
         </Route>
      </Switch>
  </Router>
  );
}

export default App;
