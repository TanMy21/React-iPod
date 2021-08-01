import React from 'react';
import '../../Static/Cover.css'
import musiccover from "../../Static/assets/disc.jpg";

const Musiccover = (props) => {

   return(
        <div className="cover">
            <div className="cover-image">
                <img src={ musiccover } alt="cover" className="song-image"  />
            </div>                     
        </div>
    );

}


export default Musiccover;