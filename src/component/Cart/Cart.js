import React from 'react';
import Information from '../Information/Information';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const singer of cart){
        total = (total  + singer.price);
    }
    // let name = [props.name];
    return (
        <div className="cart-section">
            <h4 className="arrangement">Arrangement of singers</h4>
            <h5>Singers Added: {props.cart.length}</h5>
            <br />
            <h5> <Information info={props.info}></Information></h5>
            {/* <h5>Name: {props.cart.name} </h5> */}
            <h6>Total Budget: ${total.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;