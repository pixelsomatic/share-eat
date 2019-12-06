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
  
  // renderRow(testes) {
  //   return (<li>Num: {testes}</li>)
  // }

  
  render () {
    // Busca nome de restaurantes via JSON
    const lista = this.state.testes.map((testes) => <p className="show-restaurant" key={testes}>{`${testes.name}`}</p>);
    console.log(testes[1]);

  return( 
    <div className="Places">
        <header className="Places-header">
          <img src={logo} className="logo" alt="logo" />
          <h1> Lugares </h1>
          <h6> lugares cadastrados </h6>
          <img src={background} className="App-background" alt="background" />
            
              <div className="card-restaurant">
                <Link to="/silva-lanches" className="links">
                    <div className="restaurant-name py-2 px-4"> {lista[0]} </div> 
                    <div className="dishes"> pratos </div>
                </Link>
            </div>
            <Link to="/restaurantes">
              <button className="add-menu">
                <img src={addWhite}  alt="add"/>
              </button>
            </Link>
            <div className="card-restaurant two">
                <Link to="/detalhes" className="links">
                    <div className="restaurant-name py-2 px-4"> {lista[1]} </div> 
                    <div className="dishes"> pratos </div>
                </Link>
            </div>
            <Link to="/restaurantes">
              <button className="add-menu btn-two">
                <img src={addWhite}  alt="add"/>
              </button>
            </Link>     
            <div className="card-restaurant three">
              <Link to="/detalhes" className="links">
                  <div className="restaurant-name two py-2 px-4"> {lista[2]} </div> 
                  <div className="dishes"> pratos </div>
              </Link>
            </div>
            <Link to="/restaurantes">
              <button className="add-menu btn-three">
                <img src={addWhite}  alt="add"/>
              </button>
            </Link>
            <div className="card-restaurant four">
                <Link to="/detalhes" className="links">
                    <div className="restaurant-name py-2 px-4"> {lista[3]} </div> 
                    <div className="dishes"> pratos </div>
                </Link>
            </div>
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
  
  // CRUD em React: https://medium.com/@dnvtrn/como-fazer-um-crud-com-create-react-app-f0402ff89c05
  // Cannot read map of undefined: https://stackoverflow.com/questions/24706267/cannot-read-property-map-of-undefined
  // Manipulando JSON: https://www.golangprograms.com/display-json-data-in-reactjs.html