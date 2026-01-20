import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [dark, setDark] = useState(localStorage.theme === "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.theme = dark ? "dark" : "light";   /* usando localstorage para mantener la pagina en modo oscuro aunque se restablezca la pagina*/ 
  }, [dark]);

  return (
    <div className="bg-slate-100 text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors ">
      <Navbar dark={dark} toggleDark={() => setDark(!dark)} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
