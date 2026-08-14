import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ContactFooter from "./components/ContactFooter";

function App() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme") === "dark";
    }
    return false; // Por defecto inicia en el tema Verde
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className="min-h-screen bg-black text-gray-100 transition-colors duration-300 selection:bg-emerald-500 selection:text-black dark:selection:bg-red-600 dark:selection:text-white">
      <Navbar dark={dark} toggleDark={() => setDark((prev) => !prev)} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
      </main>
      <ContactFooter />
    </div>
  );
}

export default App;