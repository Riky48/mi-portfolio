import { useState } from "react";

type NavbarProps = {
  dark : boolean;
  toggleDark: () => void;
};

export default function Navbar({ dark, toggleDark }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const linkClass = `
  px-3 py-2 rounded-md
  text-slate-700 dark:text-gray-300
  hover:text-blue-600 dark:hover:text-blue-400
  hover:bg-blue-500/10 dark:hover:bg-blue-400/10
  transition-all
`;


  return (
    <nav className="fixed top-0 w-full z-[9999] bg-slate-100/90 dark:bg-gray-950/90 backdrop-blur border-b border-slate-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <span className="text-xl font-bold text-slate-900 dark:text-white">
          Riky<span className="text-blue-600 dark:text-blue-400">.dev</span>
        </span>

        {/* Links Desktop */}
        <div className="hidden md:flex items-center gap-6 
        text-gray-700 dark:text-gray-300 hover:text-blue-600
        dark:hover:text-blue-400 transition-colors">
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
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 pb-6 flex flex-col gap-4">
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
