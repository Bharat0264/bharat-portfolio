import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-[#030712] text-white min-h-screen">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Stats />
        <Timeline />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;