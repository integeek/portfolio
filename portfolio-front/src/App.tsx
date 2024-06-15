import React from "react"
import logo from "./Assets/logo.svg"
import "./App.css"
import Navbar from "./Component/Navbar"
import Accueil from "./Component/Accueil"
import Apropos from "./Component/Apropos"
import MesCompetences from "./Component/Mescompetences"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Accueil />
      <Apropos />
      <MesCompetences />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
