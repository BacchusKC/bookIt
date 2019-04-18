import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Search from './components/Search';
import Saved from './components/Saved';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route component={Home} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
