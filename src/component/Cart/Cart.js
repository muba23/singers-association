import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const singer of cart){
        total = (total  + singer.price);
        let name = [];
        name.push(props.name);
    }
    
    return (
        <div className="cart-section">
            <h4 className="arrangement">Arrangement of singers</h4>
            <h5>Singers Added: {props.cart.length}</h5>
            <br />
            <ul className="list">
                <h5>Name:
                    {
                
                   }</h5>
                <h5>Total Budget: ${total.toFixed(2)}</h5>
            </ul>
        </div>
    );
};

export default Cart;