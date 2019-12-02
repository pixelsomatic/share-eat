import React from 'react';
import background, { ReactComponent } from './background-paint.svg';
import logo from './share-eat.svg';
import './Places.css';
import addWhite from './ic_add_white.svg';

export default class Places extends React.Component {
    render () {
      return (
        <div className="Places">
          <header className="Places-header">
            <img src={logo} className="logo" alt="logo" />
            <h1> Lugares </h1>
            <h6> lugares cadastrados </h6>
            <img src={background} className="App-background" alt="background" />
            <div className="card-restaurant">
              <div className="restaurant-name py-2 px-4"> restaurantes </div> 
              <div className="dishes"> pratos </div>
            </div>
            <button className="add-menu">
              <img src={addWhite} />
            </button>
          </header>
        </div>
      );
    }
  }
  
  