import React, { Component } from "react";
import "./App.css";
import Search from './components/Search';
import Saved from './components/Saved';
import Home from './components/Home';
import Header from './components/Header';
// import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Router>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;