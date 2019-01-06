import React, { Component, Fragment } from "react";
import Counters from "./components/Counters";
import "./App.css";
//import Movies from "./components/Movies";
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <Fragment>  
        <NavBar/>
        <main className="container">
          <Counters />
        </main>
      </Fragment>
    );
  }
}

export default App;
