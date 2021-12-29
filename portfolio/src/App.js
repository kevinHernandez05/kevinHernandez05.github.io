import './App.css';
import React,{useState,useEffect} from 'react';


//Components
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import About from './components/about/about';
import WorkPlaces from './components/workPlaces/workPlaces';
import Projects from './components/projects/projects';


function App() {

  return (
    <div className="App">
      <main className="App-header">

        <Navbar name="Kevin Hernandez" />
        <Header name="Kevin Hernandez" job='Presidencia de la República Dominicana; Programa Supérate.' />
        <About name="Kevin" />
        <WorkPlaces />
        {/* <Projects /> */}

      </main>
    </div>
  );
}



export default App;
