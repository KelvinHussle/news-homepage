import React from "react";
import Firstcontainer from "./firstcontainer/Firstcontainer";
import Secontainer from "./secontainer/Secontainer";
import Thirdcontainer from "./thirdcontainer/Thirdcontainer";
import './style.css';
const Home =()=>{
    return(
        <>
        <div className="flex-out">
            <div><Firstcontainer/></div>
            <div><Secontainer/> </div>  
        </div>
        <div>
        <Thirdcontainer/>
        </div>
        </>
    );
}
export default Home;