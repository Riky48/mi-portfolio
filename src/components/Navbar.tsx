import { useState } from "react";

type NavbarProps = {
  dark: boolean;
  toggleDark: () => void;
};

export default function Navbar({ dark, toggleDark }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "#hero", label: "Inicio" },
    { href: "#about", label: "Sobre mí" },
    { href: "#projects", label: "Proyectos" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <a 
          href="#hero" 
          className="text-xl font-bold tracking-tight text-emerald-400 dark:text-red-500 transition-colors duration-300 font-mono"
        >
          Riky<span className="text-white">.dev</span>
        </a>

        {/* Links Desktop */}
        <div className="hidden md:flex items-center ml-auto gap-2 mr-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Selector de Tema (Gemas Esmeralda / Rubí) */}
        <button
          onClick={toggleDark}
          className="ml-auto md:ml-0 flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all active:scale-95"
          title={dark ? "Cambiar a modo Esmeralda" : "Cambiar a modo Rubí"}
          aria-label="Alternar tema de color"
        >
          {dark ? (
            <span className="w-3.5 h-3.5 rounded-full bg-red-600 shadow-[0_0_12px_rgba(220,38,38,0.9)] animate-pulse" />
          ) : (
            <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.9)] animate-pulse" />
          )}
        </button>

        {/* Botón Hamburguesa Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden ml-4 p-2 text-gray-300 hover:text-white focus:outline-none"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <span className="text-2xl leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Menú Mobile */}
      {open && (
        <div className="md:hidden bg-zinc-950 border-b border-white/10 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base text-gray-300 hover:text-emerald-400 dark:hover:text-red-400 py-1 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}