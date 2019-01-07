import Counter from './Counter';
import React, { Component } from 'react'

export class Counters extends Component {

  render() {
      const { onReset, counters, onDelete, onIncrement, onDecrement } = this.props;
    return (
      <div>
        <button
         onClick={onReset}
         className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {counters.map(counter =>
         <Counter 
            counter={counter}
            key={counter.id}            
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
         />
        )}
      </div>
    )
  }
} // ./Counters

export default Counters;
