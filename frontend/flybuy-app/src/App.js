import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react'
import axios from 'axios'
import Routerfile from './router/Routerfile'
import Navbar from './router/Navbar';
// const cors=require("cors")

function App(){



  return (
    <div className="App">
      {/* <Navbar/> */}
      <Routerfile/>


      
    </div>
  );
}

export default App;
