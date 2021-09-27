import React, { useState } from 'react';
import './Information.css'

const Information = (props) => {
    const [info, setInfo] = useState([]);

    const handleInfo = (singer) =>{
        
     }
    return (
        <div className="information-container">   
           <div class="card-deck">
               <div class="card">
                    {
                        info.map(info=> info)
                    }
                </div>
            </div>
        </div>
    );
};

export default Information;