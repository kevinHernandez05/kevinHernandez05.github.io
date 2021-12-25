import './App.css';

//Components
import Navbar from './components/navbar/navbar';
import About from './components/about/about'


function App() {
  return (
    <div className="App">
      <main className="App-header">
        <Navbar name = "Kevin Hernandez"/>
        <About job = 'Presidencia de la Republica Dominicana; Programa Supérate'/>
      </main>
    </div>
  );
}

export default App;
