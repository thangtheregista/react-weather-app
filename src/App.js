import React from 'react';


//COMPONENTS
import Header from "./components/Header"
import Weather from "./components/Weather"

//STYLE
import './App.css';


function App() {
  return (
    <div className="container">
      <Header />
      <Weather />
    </div>
  );
}

export default App;
