import './App.css';
import React, { Suspense } from 'react';


//Components
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import About from './components/about/about';
import Projects from './components/projects/projects';


const WorkPlaces = React.lazy(() => import('./components/workPlaces/workPlaces'));


function App() {

  return (
    <div className="App">
      <main className="App-header">

        <Navbar name="Kevin Hernandez" />
        <Header name="Kevin Hernandez" job='Presidencia de la República Dominicana; Programa Supérate.' />
        <About name="Kevin" />
        <Suspense fallback={<div>Loading...</div>}>
          <WorkPlaces />
        </Suspense>
        <span className='section'></span>
        <Projects />

      </main>
    </div>
  );
}



export default App;
