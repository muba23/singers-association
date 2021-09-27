import React from 'react';
import './Cart.css'

const Cart = (props) => {
    
    return (
        <div>
            <h4 className="arrangement">Arrangement of singers</h4>
            <h5>Singers Added: {props.cart.length}</h5>
            <br />
            <h6>Total Cost: $</h6>
        </div>
    );
};

export default Cart;