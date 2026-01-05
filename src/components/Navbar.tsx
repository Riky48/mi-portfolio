import { useState } from "react";

type NavbarProps = {
  toggleDark: () => void;
};

export default function Navbar({ toggleDark }: NavbarProps){
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
          <a href="#hero" className="nav-link">Inicio</a>
          <a href="#about" className="nav-link">Sobre mí</a>
          <a href="#projects" className="nav-link">Proyectos</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#contact" className="nav-link">Contacto</a>

          <button onClick={toggleDark} className="ml-4">
            🌙
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
  <div className="md:hidden bg-white dark:bg-gray-900 px-6 pb-6">
    <div className="flex flex-col gap-4 text-center">
      <a href="#hero" onClick={() => setOpen(false)}>Inicio</a>
      <a href="#about" onClick={() => setOpen(false)}>Sobre mí</a>
      <a href="#projects" onClick={() => setOpen(false)}>Proyectos</a>
      <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
      <a href="#contact" onClick={() => setOpen(false)}>Contacto</a>

      <button onClick={toggleDark} className="mt-4">
        🌙 Modo oscuro
      </button>
    </div>
  </div>
)}

    
    </nav>
  );
}
