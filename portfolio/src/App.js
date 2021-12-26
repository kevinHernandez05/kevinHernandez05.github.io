import './App.css';

//Components
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import About from './components/about/about';


function App() {
  return (
    <div className="App">
      <main className="App-header">

        <Navbar name="Kevin Hernandez" />
        <Header name="Kevin Hernandez" job='Presidencia de la República Dominicana; Programa Supérate.' />
        <About name="Kevin" />

      </main>
    </div>
  );
}

export default App;
