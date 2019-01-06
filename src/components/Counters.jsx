import Counter from './Counter';
import React, { Component } from 'react'

export class Counters extends Component {

  render() {
    return (
      <div>
        <button
         onClick={this.props.onReset}
         className="btn btn-primary btn-sm m-2"
        >
            Reset
        </button>
        {this.props.counters.map(counter =>
         <Counter 
            counter={counter}
            key={counter.id}            
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
        />)}
      </div>
    )
  }
}

export default Counters;
