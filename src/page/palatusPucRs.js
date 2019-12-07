import React from 'react';
import '../App.css';
import '../Details.css';
import logo from '../share-eat.svg';
import background from '../background-paint.svg';
import addYellow from '../ic_add_black.svg';
import {Link} from "react-router-dom";
import testes from '../teste.json';
import arrowBack from '../back-button.png';

export default class Details extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
         testes: testes
       };
     } 
    
    render () {
       const lista = this.state.testes.map((testes) => <ul key={testes}>{`${testes.name}`}</ul>); 
       const item_name = this.state.testes[3].menuItems.map((testes) => <ul key={testes}> {`${testes.name}`}</ul>) ;
       const item_description = this.state.testes[3].menuItems.map((testes) => <ul key={testes}>{`${testes.description}`}</ul>);
       const item_price = this.state.testes[3].menuItems.map((testes) => <p className="price-card" key={testes}>{`${testes.price}`}</p>);

       let quantPlates = testes[3].menuItems.length;

       return (
          <div className="App-header">
                <img src={logo} className="logo" alt="logo" />
                <h1> {lista[3]} </h1>
                <h5>{quantPlates} pratos</h5>   
                <img src={background} className="App-background" alt="background" />
                <Link to="/">
                  <img src={arrowBack} className="back-button-detalhes" alt="back" />
                </Link>
                <div className="card-details">
                   <div className="food-name"> {item_name[0]} {item_price[0]} </div>
                   <div className="food-details">{item_description[0]}</div>
                </div>
                <div className="card-details second">
                   <div className="food-name"> {item_name[1]} {item_price[1]} </div>
                   <div className="food-details">{item_description[1]}</div>
                </div>
                <div className="card-details third">
                   <div className="food-name"> {item_name[2]} {item_price[2]} </div>
                   <div className="food-details">{item_description[2]}</div>
                </div>
                <Link to="/form/palatus-puc-rs">
                   <button className="add-meal">
                      <img src={addYellow} alt="add-yellow" id="yellow"/>
                   </button>
                </Link>
          </div>
       );
    }
 }
 