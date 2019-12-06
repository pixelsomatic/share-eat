import React from 'react';
import './Restaurants.css';
import logo from './share-eat.svg';
import Label from './Labels';
export default class Restaurantes extends React.Component {
   
   render() {
      return (
         <div className="formulario-background">
             <header>
               <img src={logo} className="logo-form" alt="logo" />
            </header>
            <h1> Restaurante Selecionado </h1>
           <form className="input-plate">
               <Label text='Nome do prato'/>
               <input name="name" type="text" placeholder="Prato" />
               <Label text='Valor' />
               <input name="price" type="text" placeholder="Valor" />
            </form>
         </div>
      );
   }
}
