import "./App.css";
import { lazy, Suspense } from "react";

//Components
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Footer from "./components/footer/footer";
import Contact from "./components/contact/contact";
// import Courses from './components/courses/courses';

//konami code
import KonamiCode from "./components/konamicode/konamiCode";
import Newsletter from "./components/newsletter/newsletter";

const WorkPlaces = lazy(() => import("./components/workPlaces/workPlaces"));

function App() {
  return (
    <div className="App">
      {/* Newsletter component*/}
      <Newsletter />

      <main className="App-header">
        {/* Navbar */}
        <Navbar name="Kevin Hernandez" />

        {/* Konami Code */}
        <KonamiCode courseKey={"null"} />

        {/* Hero Section */}
        <Header name="Kevin Hernandez" job="" />

        {/* About Section */}
        <About name="Kevin" />

        {/* Work Places Section */}
        <Suspense fallback={<div>Loading...</div>}>
          <WorkPlaces />
        </Suspense>

        {/* Projects Section */}
        <span className="section"></span>
        <Projects />

        {/* Courses Section (TBA)*/}
        {/* <Courses /> */}

        {/* Contact Section */}
        <Contact />

        {/* Footer Section */}
        <Footer />
      </main>
    </div>
  );
}

export default App;
