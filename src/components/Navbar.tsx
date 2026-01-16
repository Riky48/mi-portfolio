import { useState } from "react";

type NavbarProps = {
  dark : boolean;
  toggleDark: () => void;
};

export default function Navbar({ dark, toggleDark }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <span className="text-xl font-bold text-gray-900 dark:text-white">
          Riky.dev
        </span>

        {/* Links Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#hero" className="nav-link">
            Inicio
          </a>
          <a href="#about" className="nav-link">
            Sobre mí
          </a>
          <a href="#projects" className="nav-link">
            Proyectos
          </a>
          <a href="#skills" className="nav-link">
            Skills
          </a>
          <a href="#contact" className="nav-link">
            Contacto
          </a>

          <button
            onClick={toggleDark}
            className="ml-4 text-xl transition-transform hover:rotate-12"
            aria-label="Toggle dark mode"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Botón Hamburguesa (Mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-gray-900 dark:text-white"
        >
          ☰
        </button>
      </div>

      {/* Menú Mobile */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 pb-6 space-y-4">
          <a
            href="#hero"
            onClick={() => setOpen(false)}
            className="block text-gray-800 dark:text-gray-200"
          >
            Inicio
          </a>

          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="block text-gray-800 dark:text-gray-200"
          >
            Sobre mí
          </a>

          <a
            href="#projects"
            onClick={() => setOpen(false)}
            className="block text-gray-800 dark:text-gray-200"
          >
            Proyectos
          </a>

          <a
            href="#skills"
            onClick={() => setOpen(false)}
            className="block text-gray-800 dark:text-gray-200"
          >
            Skills
          </a>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block text-gray-800 dark:text-gray-200"
          >
            Contacto
          </a>

          <button onClick={toggleDark} className="block text-lg">
            {dark ? "☀️ Modo claro" : "🌙 Modo oscuro"}
          </button>
        </div>
      )}
    </nav>
  );
}
