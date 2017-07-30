import React, { Component } from 'react';
import logo from '../logo.svg';

import '../Styles/App.css';
import NavBar from './NavBar.js';
import PlayList from './PlayList.js';
import PlayListForm from './PlayListForm.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <NavBar />
        </div>
        <div className="row wholePage">
          <div className="col-lg playListForm">
            <PlayListForm />
          </div>
          <div className="col-lg playListThings">
            <PlayList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
