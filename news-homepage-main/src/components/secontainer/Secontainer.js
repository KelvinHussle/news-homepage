import React from "react";
import "./sec.css";
const Secontainer = () =>{
    return(
        <div className="outer-container">
            
            <ul>
                <li><h2 className="newhead">New</h2></li>
                <li className="list-2">
                    <h3>Hydrogen VS Electric Cars </h3>
                    <p> Will hydrogen-fueled cars ever catch up to EVs?</p>
                </li>

                <li className="list-2">
                    <h3>The Downsides of AI Artistry</h3>
                    <p>What are the possible adverse effects of on-demand AI image generation?</p>
                </li>

                <li className="list">
                    <h3>Is VC Funding Drying Up?</h3>
                    <p>Private funding by VC firms is down 50% YOY.</p>
                </li>
            </ul>
        </div>
    );
}
export default Secontainer;