import Navbar from './Components/Navbar';
import {BrowserRouter,Route,Link } from "react-router-dom";

import './App.css'

function App() {
  
  return (
    <div>
      <BrowserRouter>
      
          <Navbar />
       
      </BrowserRouter>
    </div>
  )
}

export default App
