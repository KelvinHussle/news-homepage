import React from "react";
import web3 from '../images/image-web-3-desktop.jpg'
import './firstcontainer.css'
import Readmore from "../Readmore/Readmore";
const Firstcontainer =()=>{
    return(
        <div className="super-container">
<div className="image-container">
    <img src={web3} style={{width:'650px',height:'300px'}}/>
</div>
<div className="words-super-container">
    <div className="bold-container">
    <p className="bold">The Bright<br/> Future of <br/> Web 3.0?</p>
    </div>
    <div className="paragraph-container">
        <p className="pragraph">
        We dive into the next evolution of the web<br/>
         that claims to put the power of the platforms
        back <br/>
        into the hands of the people. But is it really<br/>
         fulfilling its promise?
        </p>
        <Readmore/>
    </div>
</div>
        </div>
    );
}
export default Firstcontainer;