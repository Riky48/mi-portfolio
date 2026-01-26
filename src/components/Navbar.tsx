import { useState } from "react";

type NavbarProps = {
  dark : boolean;
  toggleDark: () => void;
};

// ... (tus otros imports)

export default function Navbar({ dark, toggleDark }: NavbarProps) {
  const [open, setOpen] = useState(false);

  // Clase para los links (limpiada un poco)
  const linkClass = "px-3 py-2 rounded-md text-white hover:text-emerald-400 dark:hover:text-red-500 transition-all duration-300";

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo - El color cambia según el modo */}
        <span className="text-xl font-bold text-emerald-400 dark:text-red-500 transition-colors duration-500">
          Riky<span className="text-white">.dev</span>
        </span>

        {/* Links Desktop */}
        <div className="hidden md:flex items-center ml-auto gap-4 mr-6">
          <a href="#hero" className={linkClass}>Inicio</a>
          <a href="#about" className={linkClass}>Sobre mí</a>
          <a href="#projects" className={linkClass}>Proyectos</a>
          <a href="#skills" className={linkClass}>Skills</a>
          <a href="#contact" className={linkClass}>Contacto</a>
        </div>

        {/* SELECTOR DE TEMA (Botón Esmeralda/Rubí) */}
        <button
          onClick={toggleDark}
          className="ml-auto md:ml-0 flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-white/30 transition-all active:scale-90"
          title="Cambiar tema visual"
        >
          {dark ? (
            /* GEMA ROJA (Modo Dark activado) */
            <div className="w-4 h-4 rounded-full bg-red-600 shadow-[0_0_12px_rgba(220,38,38,0.8)] animate-pulse" />
          ) : (
            /* GEMA VERDE (Modo "Emerald" activado) */
            <div className="w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)] animate-pulse" />
          )}
        </button>

        {/* Botón Hamburguesa */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden ml-4 text-2xl text-white"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Menú Mobile */}
      {open && (
        <div className="md:hidden bg-zinc-900 border-b border-white/10 px-6 py-8 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4">
          <a href="#hero" onClick={() => setOpen(false)} className="text-lg text-white">Inicio</a>
          <a href="#about" onClick={() => setOpen(false)} className="text-lg text-white">Sobre mí</a>
          <a href="#projects" onClick={() => setOpen(false)} className="text-lg text-white">Proyectos</a>
          <a href="#skills" onClick={() => setOpen(false)} className="text-lg text-white">Skills</a>
          <a href="#contact" onClick={() => setOpen(false)} className="text-lg text-white font-bold text-emerald-400 dark:text-red-500">Contacto</a>
        </div>
      )}
    </nav>
  );
}