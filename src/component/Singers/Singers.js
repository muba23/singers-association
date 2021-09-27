import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Singers.css'



// loading singers 
const Singers = (props) => {
    //console.log(props);
    const {img, name, gender, country,price, phone} = props.singer;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    // const facebookIcon = <FontAwesomeIcon icon={faFacebook}/>
    return (
       <div className="card-container">
           <div class="card-deck">
               <div class="card">
                    <img class="card-img-top" src={img}alt=""/>
                    <h5 class="card-title">Name: {name}</h5>
                    <h5 class="card-title">Gender: {gender}</h5>
                    <h5 class="card-title">Country: {country}</h5>
                    <h5 class="card-title">Phone: {phone}</h5> 
                    <h5 class="card-title">Salary: ${price} per Month</h5>
                    <button 
                    onClick = {() => props.handleCart(props.singer)}
                    className="general-btn">{cartIcon}   Add to cart</button> 
                    <h5 class="card-title icon"><i class="fab fa-facebook-square"></i><i class="fab fa-twitter"></i><i class="fab fa-instagram-square"></i></h5>    

              </div> 
         </div>
       </div> 
    );
};

export default Singers;