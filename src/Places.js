import React from 'react';
import background from './background-paint.svg';
import logo from './share-eat.svg';
import './Places.css';
import addWhite from './ic_add_white.svg';
import {Link} from "react-router-dom";
import testes from './teste.json';

export default class Places extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testes: testes
    };
  }  
  
render () {
  // Busca nome de restaurantes via JSON
const lista = this.state.testes.map((testes) => <p className="show-restaurant" key={testes}>{`${testes.name}`}</p>);

return( 
  <div className="Places">
    <header className="Places-header">
      <img src={logo} className="logo" alt="logo" />
      <h1> Lugares </h1>
      <h6> lugares cadastrados </h6>
      <img src={background} className="App-background" alt="background" />
          
      <Link to="/page/silva-lanches" className="links">
        <div className="card-restaurant">
            <div className="restaurant-name py-2 px-4"> {lista[0]} </div> 
            <div className="dishes"> pratos </div>
        </div>
      </Link>
      <Link to="/restaurantes">
        <button className="add-menu">
          <img src={addWhite}  alt="add"/>
        </button>
      </Link>
      <Link to="/page/z-cafe" className="links">
        <div className="card-restaurant two">
            <div className="restaurant-name py-2 px-4"> {lista[1]} </div> 
            <div className="dishes"> pratos </div>
        </div>
      </Link>
      <Link to="/restaurantes">
        <button className="add-menu btn-two">
          <img src={addWhite}  alt="add"/>
        </button>
      </Link>     
      <Link to="/page/canal-cafe-puc-rs" className="links">
        <div className="card-restaurant three">
            <div className="restaurant-name two py-2 px-4"> {lista[2]} </div> 
            <div className="dishes"> pratos </div>
        </div>
      </Link>
      <Link to="/restaurantes">
        <button className="add-menu btn-three">
          <img src={addWhite}  alt="add"/>
        </button>
      </Link>
      <Link to="/page/palatus-puc-rs" className="links">
        <div className="card-restaurant four">
            <div className="restaurant-name py-2 px-4"> {lista[3]} </div> 
            <div className="dishes"> pratos </div>
        </div>
      </Link>
      <Link to="/restaurantes">
        <button className="add-menu btn-four">
          <img src={addWhite}  alt="add"/>
        </button>
      </Link>
    </header>
  </div>
  );
}
}
