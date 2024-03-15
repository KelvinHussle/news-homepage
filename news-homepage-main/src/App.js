import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter , Routes, Route} from "react-router-dom";
import Home from "./components/Home";
const App = () =>{
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
