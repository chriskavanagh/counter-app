import React, { Component, Fragment } from "react";
import Counters from "./components/Counters";
import "./App.css";
import Movies from "./components/Movies";
import NavBar from './components/NavBar';


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
    return (
      <Fragment>  
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container">
          <Counters
           counters={this.state.counters}
           onReset={this.handleReset}
           onIncrement={this.handleIncrement}
           onDecrement={this.handleDecrement}
           onDelete={this.handleDelete}
          />
        </main>
        <Movies />
      </Fragment>
    );
  }
}

export default App;
