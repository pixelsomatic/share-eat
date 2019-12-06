import React from 'react';
import './App.css';
import './Details.css';
import logo from './share-eat.svg';
import background from './background-paint.svg';
import addYellow from './ic_add_black.svg';
import {Link} from "react-router-dom";
import menuRest from './teste.json';

export default class Details extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
        menuRest: menuRest
      };
    } 
   
   render () {
      const menu = this.state.menuRest.map((menuRest) => <li key={menuRest.menuItems}>{`${menuRest.menuItems.name}`}</li>) 
      // console.log(menu);
   // const menuI = this.state.menuRest((menuRest) => <div className="menuI.menuItems">{menuRest.menuItems}</div> )
      // console.log(menuI);
      return (
         <div className="App-header">
               <img src={logo} className="logo" alt="logo" />
               <h1> Silva Lanches </h1>
               <img src={background} className="App-background" alt="background" />

               <div className="card-details">
                  <div className="food-name">Lanche</div>
                  <div className="food-details">Descrição</div>
               </div>
               <Link to="/restaurantes">
                  <button className="add-meal">
                     <img src={addYellow} alt="add-yellow" id="yellow"/>
                  </button>
               </Link>
         </div>
      );
   }
}