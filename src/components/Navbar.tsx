import { useEffect, useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    darkMode
      ? root.classList.add("dark")
      : root.classList.remove("dark");
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <span className="font-bold text-gray-900 dark:text-white">
          Ricardo Krotter
        </span>

        <div className="flex items-center gap-6">
          <a href="#hero" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Inicio</a>
          <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Sobre mí</a>
          <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Proyectos</a>
          <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Skills</a>
          <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Contacto</a>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>

      </div>
    </nav>
  );
}
