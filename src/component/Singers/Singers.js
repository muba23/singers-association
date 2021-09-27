import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Singers.css'

// loading singers 
const Singers = (props) => {
    //console.log(props);
    const {img, name, gender, country, price, phone} = props.singer;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
       <div className="card-container">
           <div class="card-deck">
               <div class="card">
                    <img class="card-img-top" src={img}alt=""/>
                    <h5 class="card-title">Name: {name}</h5>
                    <h5 class="card-title">Gender: {gender}</h5>
                    <h5 class="card-title">Country: {country}</h5>
                    <h5 class="card-title">Price: {price}</h5>
                    <h5 class="card-title">Phone: {phone}</h5> 
                    <button 
                    onClick = {() => props.handleAddToCart(props.singer)}
                    className="general-btn">{cartIcon}Add to cart</button>        
              </div> 
         </div>
       </div> 
    );
};

export default Singers;