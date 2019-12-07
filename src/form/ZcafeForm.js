import React from 'react';
import '../Restaurants.css';
import logo from '../share-eat.svg';
import arrowBack from '../back-button.png';
import Label from '../Labels';
import {Link} from "react-router-dom";

export default class Restaurantes extends React.Component {
   render() {
      return (
         <div className="formulario-background">
            <Link to="/">
               <img src={arrowBack} className="back-button" alt="back" />
            </Link>
            <header>
               <img src={logo} className="logo-form" alt="logo" />
            </header>
            <h1> Z café </h1>
           <form className="input-plate">
               <Label text='Nome do prato'/>
               <input name="name" type="text" placeholder="Prato" />
               <Label text='Valor' />
               <input className="price" type="number" placeholder="R$ 0,00" step="0.01" min="0.01"/>
               <Label text='Descrição do prato' />
               <textarea className="description" type="text" placeholder="Insira uma descrição"/>
               <p> *A descrição deve conter até 200 caracteres. </p>

               <Link to="/form/z-cafe">
                  <button className="yellowButton">
                     <label className="save-form">Salvar</label>
                  </button>
               </Link>
            </form>
         </div>
      );
   }
}
