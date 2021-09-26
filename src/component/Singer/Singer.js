import './Singer.css'

import React, { useEffect, useState } from 'react';
import Singers from '../Singers/Singers';

const Singer = () => {
    const [singers, setSingers] = useState([]);

    useEffect(()=>{
        fetch('./singersData.JSON')
        .then(res => res.json())
        .then(data=>setSingers(data))
    },[])
    return (
        <div className="main-container">
            <div className="singer-container">
                {
                    singers.map(singer => <Singers singer={singer}></Singers>)
                }
            </div>
            <div className="cart-container">
                <h2>Ordered:</h2>
            </div>
            
        </div>
    );
};

export default Singer;