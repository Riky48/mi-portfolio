import { useState } from "react";

type NavbarProps = {
  dark : boolean;
  toggleDark: () => void;
};

export default function Navbar({ dark, toggleDark }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const linkClass = "px-3 py-2 rounded-md text-dark-text dark:text-dark-text hover:text-light-green dark:hover:text-dark-accent hover:bg-gray-600/70 dark:hover:bg-dark-accent/20 transition-all";


  return (
    <nav
  className="
    fixed top-0 w-full z-50  
    bg-gradient-to-br from-emerald-900 via-emerald/5 to-black-900
    dark:from-dark-bg dark:via-black/5 dark:to-black
    transition-colors
  "
>

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <span className="text-xl font-bold text-white">
          Riky<span className="text-emerald-400 dark:text-red-500">.dev</span>
        </span>

        {/* Links Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#hero" className={linkClass}>
            Inicio
          </a>
          <a href="#about" className={linkClass}>
            Sobre mí
          </a>
          <a href="#projects" className={linkClass}>
            Proyectos
          </a>
          <a href="#skills" className={linkClass}>
            Skills
          </a>
          <a href="#contact" className={linkClass}>
            Contacto
          </a>

          
        </div>
        <button
            onClick={toggleDark}
            className="ml-auto text-xl z-50 relative transition-transform hover:rotate-12"
            aria-label="Toggle dark mode"
          >
            {dark ? "☀️" : "🌙"}
          </button>

        {/* Botón Hamburguesa (Mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-black-900 dark:text-white"
        >
          ☰
        </button>
      </div>

      {/* Menú Mobile */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur px-6 pb-6 flex flex-col gap-4">
          <a
            href="#hero"
            onClick={() => setOpen(false)}
            className="block mt-4 text-gray-800 dark:text-gray-200"
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

        </div>
      )}
    </nav>
  );
}
