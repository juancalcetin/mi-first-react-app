import React, {Component,Fragment} from 'react';
import logo from '../assets/img/logo.svg'

class Home extends  Component {
  render(){
    console.log("hola");
    return(
      <Fragment>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook es bueno
        </a>
      </Fragment>
    )
  }
}

export default Home;
