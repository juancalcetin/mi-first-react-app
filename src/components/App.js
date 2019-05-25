/* eslint-disable */
// Packages
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Components
import Header from './global/Headers';
import Footer from './global/Footer';
import Body from './global/Body';
// Assets
import './assets/css/App.css';

function setYear() {
  return new Date().getFullYear();
}

class App extends Component {
  static Proptypes = {
    children: PropTypes.object.isRequired
  };
  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <Header/>
        <Body content={children}/>
        <Footer name="Pablo" year={setYear()} />
      </div>
    );
  }
}

export default App;
