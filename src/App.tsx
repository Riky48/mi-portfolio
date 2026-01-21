import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Skills from "./components/Skills";

import AboutProjects from "./components/AboutProjects";
import ContactFooter from "./components/ContactFooter";


function App() {
  const [dark, setDark] = useState(localStorage.theme === "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.theme = dark
      ? "dark"
      : "light"; /* usando localstorage para mantener la pagina en modo oscuro aunque se restablezca la pagina*/
  }, [dark]);

  return (
    <div
  className="
    min-h-screen
    bg-black/90 
    transition-colors
  "
>

      <Navbar dark={dark} toggleDark={() => setDark(!dark)} />
      <Hero />
      <AboutProjects />
      <Skills />
      <ContactFooter />
    </div>
  );
}

export default App;
