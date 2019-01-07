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
      <div className="row">
        <div className="col-1">
          <span className={classes}>{this.formatCount()}</span>
        </div>
        <div className="col">
        <button
          onClick={()=>this.props.onIncrement(this.props.counter.id)}
          className="btn btn-outline-secondary btn-sm"
        >
          + Add
        </button>

        <button
          onClick={()=>this.props.onDecrement(this.props.counter.id)}
          className="btn btn-outline-secondary btn-sm m-2"
          disabled={this.props.counter.value === 0 ? 'disabled' : ''}
        >
          - Sub
        </button>

        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
         </button>
        </div>        
      </div>
    );
  }
} // ./Counter

export default Counter;
