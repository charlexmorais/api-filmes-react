
import React from "react"

import {  Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {
  

  return (
    <div className="App">
     <Navbar/>
      <Outlet/> 
      {/* React Router, um outlet é um local onde o conteúdo do componente associado a uma rota específica será renderizado.  */}
    </div>
  )
}

export default App
