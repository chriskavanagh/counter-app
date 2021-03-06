import React, { Component, Fragment } from "react";
import {Route} from 'react-router-dom';
//import Counters from "./components/Counters";
import "./App.css";
import Width from "./components/Width";
import Movies from "./components/Movies";
import NavBar from './components/NavBar';
//import Prompt from './components/Prompt';


class App extends Component {
  state = {
    counters: [
        {id:1, value:0},
        {id:2, value:0},
        {id:3, value:0},
        {id:4, value:0}
    ]
};

  handleDelete = (counterId) => {
      console.log("E handler called", counterId);
      const counters = this.state.counters.filter(c => c.id !== counterId);
      this.setState({counters: counters});
  };

  handleReset = () => {
      const counters = this.state.counters.map(c => {
          c.value = 0;
          return c;
      });
      this.setState({counters: counters})
  };

  /* handleIncrement = (counter) => {        
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter)
      counters[index] = {...counter}
      counters[index].value++;
      this.setState({counters:counters})
  }; */

  handleIncrement = (counterId) => {
      console.log(counterId);        
      const counters = this.state.counters.map(m => {
          if(m.id === counterId) {m.value++}
          return m;
      });
      this.setState({counters:counters});
  };

  handleDecrement = (counterId) => {
    console.log(counterId);        
    const counters = this.state.counters.map(m => {
        if(m.id === counterId) {m.value--}
        return m;
    });
    this.setState({counters:counters});
 };

  render() {
    const { counters } = this.state;
    return (
      <Fragment>  
        <NavBar totalCounters={counters.filter(c => c.value > 0).length} />
        <Movies className="movies"/>
        <div className="container">
          <div className="row justify-content-center">
            <Width />
          </div>
        </div>                
      </Fragment>
    );
  }
}

export default App;
