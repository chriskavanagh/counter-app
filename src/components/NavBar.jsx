import React, { Component } from 'react'

class NavBar extends Component {
  render() {
    const { totalCounters } = this.props;
    return (
      <nav className="navbar navbar-light bg-dark">
        <a className="navbar-brand bg-secondary p-2" href="#/">
          React-Counter 
          <span className="badge badge-pill secondary num">{totalCounters}</span>
        </a>
      </nav>
    )
  }
}


export default NavBar;
