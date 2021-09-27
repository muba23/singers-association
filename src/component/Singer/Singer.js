import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Singers from '../Singers/Singers';

import './Singer.css'


const Singer = () => {
    const [singers, setSingers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('./singersData.JSON')
        .then(res => res.json())
        .then(data=>setSingers(data))
    },[])

    const handleCart = (singer) =>{
       // console.log(singer);
       const newCart = [...cart, singer];
       setCart(newCart);
    }
    return (
        <div className="main-container">
            <div className="singer-container">
                {
                    singers.map(singer => <Singers 
                        key = {singer._id}
                        singer={singer}
                        handleCart={handleCart}>
                        </Singers>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Singer;