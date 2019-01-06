import Counter from './Counter';
import React, { Component } from 'react'

export class Counters extends Component {
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
        const counters = this.state.counters.filter((c=> c.id !== counterId));
        this.setState({counters:counters});
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

  render() {
    return (
      <div>
        <button
         onClick={this.handleReset}
         className="btn btn-primary btn-sm m-2"
        >
            Reset
        </button>
        {this.state.counters.map(counter =>
         <Counter 
            counter={counter}
            key={counter.id}            
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
        />)}
      </div>
    )
  }
}

export default Counters
