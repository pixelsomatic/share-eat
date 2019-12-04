import React from 'react';
import './App.css';
import './Details.css';
import logo from './share-eat.svg';
import background from './background-paint.svg';
import addYellow from './ic_add_black.svg';

export default class Details extends React.Component {
   render () {
      return (
         <div className="App-header">
               <img src={logo} className="logo" alt="logo" />
               <h1> Lugares Detalhes </h1>
               <img src={background} className="App-background" alt="background" />

               <div className="card-details">
                  <div className="food-name">Lanche</div>
                  <div className="food-details">Descrição</div>
               </div>
               <button className="add-meal">
                  <img src={addYellow} alt="add-yellow" id="yellow"/>
               </button>
         </div>
      );
   }
}