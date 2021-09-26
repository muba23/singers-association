import './Singers.css'

import React from 'react';

const Singers = (props) => {
    console.log(props.singer);
    const {img, name, gender, country, price, phone} = props.singer;
    return (
       <div className="card-container">
           <div class="card-deck">
                <div class="card">
                    <img class="card-img-top" src={img} alt=""/>
                    <h5 class="card-title">Name: {name}</h5>
                    <h5 class="card-title">Gender: {gender}</h5>
                    <h5 class="card-title">Country: {country}</h5>
                    <h5 class="card-title">Price: {price}</h5>
                    <h5 class="card-title">Phone: {phone}</h5>    
                </div>
            </div>
       </div>
    );
};

export default Singers;