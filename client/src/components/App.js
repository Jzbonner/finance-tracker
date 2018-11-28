import React, { Component } from 'react';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="container-header">
              <h3 className="header">
                <i className="fas fa-balance-scale ft-icon"></i>
                Finance Tracker
              </h3>     
            </div>
          </div>
        </div> 

        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            {/*
              Will be a reference to a componenet in a future release
            */}
            <div className="view-container"></div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    );
  }
}

export default App;
