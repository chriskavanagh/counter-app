import React, { Component } from "react";

class Counter extends Component {  

  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };  

  render() {
    let classes = "badge m-2 badge-pill badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";

    return (
      <div>
        <span className={classes}>{this.formatCount()}</span>
        <button
          onClick={()=>this.props.onIncrement(this.props.counter.id)}
          className="btn btn-outline-secondary btn-sm"
        >
          Increment
        </button>

        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
         </button>
        
      </div>
    );
  }
} // ./Counter

export default Counter;
