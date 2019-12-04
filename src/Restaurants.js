import React from 'react';
import './Restaurants.css';
import logo from './share-eat.svg';
import './Places.css';
export default class Restaurantes extends React.Component {
   render() {
      return (
         <div className="formulario-background">
               <header>
                  <img src={logo} className="logo" alt="logo" />
               </header>
                  <h1> Restaurante Selecionado </h1>
         </div>
      );
   }
}
