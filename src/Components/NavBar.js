import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div className="row navBar">
        <div className="col-sm logo">

        </div>

        <div className="col-sm navTitle">
          <h1>Pick a song!</h1>
        </div>
      </div>
    );
  }
}

export default NavBar;
