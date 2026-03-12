import "./App.css";

// Components
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import About from "./components/about/about";
import ExperienceTimeline from "./components/workPlaces/workPlaces";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

// Extras
import KonamiCode from "./components/konamicode/konamiCode";
import Newsletter from "./components/newsletter/newsletter";

function App() {
  return (
    <div className="App min-h-screen bg-slate-950 text-white">
      <Newsletter />
      <KonamiCode courseKey={"null"} />

      <main className="App-header min-h-screen bg-slate-950 text-white">
        <Navbar name="Kevin Hernandez" />
        <Header name="Kevin Hernandez" job="" />
        <About name="Kevin Hernandez" />
        <ExperienceTimeline />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;