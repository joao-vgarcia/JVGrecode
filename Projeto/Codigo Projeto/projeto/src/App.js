import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import { BrowserRouter } from "react-router-dom";
import Routes from "./rotas";
import Homee from "./paginas/homee";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      
      <Routes/>
      
     
      </BrowserRouter>
     
     
    </div>
  );
}

export default App;
