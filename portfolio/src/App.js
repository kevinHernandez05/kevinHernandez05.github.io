import './App.css';

//Components
import Navbar from './components/navbar/navbar';
import Header from './components/header/header'


function App() {
  return (
    <div className="App">
      <main className="App-header">
        <Navbar name = "Kevin Hernandez"/>
        <Header name = "Kevin Hernandez" job = 'Presidencia de la Republica Dominicana; Programa Supérate.'/>
      </main>
    </div>
  );
}

export default App;
