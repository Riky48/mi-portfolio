import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profileImg from "../assets/profile.jpg";
import riffandrateImg from "../assets/riffandrate.png";
import portfolioImg from "../assets/portfolio.png";

type Project = {
  title: string;
  problem: string; // Nuevo campo para el problema en cuestion
  description: string;
  stack: string[]; // Cambiado a array para los badges 
  repo: string;
  demo: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Riff & Rate - Web para Músicos",
    problem: "Falta de plataformas profesionales para sesionistas y marketplace seguro.",
    description: "Red social integral con perfiles profesionales, feed y compra-venta de instrumentos.",
    stack: ["React", "TypeScript", "NestJS", "MySQL"],
    repo: "https://github.com/Riky48/TPFINALFIP-riff.and.rate",
    demo: "https://riffandrate.vercel.app",
    image: riffandrateImg,
  },
  {
    title: "Portfolio Personal",
    problem: "Necesidad de una carta de presentación técnica de alto impacto.",
    description: "Desarrollado con enfoque mobile-first y animaciones fluidas.",
    stack: ["React", "Vite", "Tailwind", "Framer Motion"],
    repo: "https://github.com/Riky48/mi-portfolio",
    demo: "https://ricardokrotter.vercel.app",
    image: portfolioImg,
  },
];

export default function AboutProjects() {
  const [index, setIndex] = useState(0);
  const [, setDirection] = useState(1);
  const project = projects[index];

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      className="
        relative px-6 py-20
        bg-gradient-to-br from-emerald-900 via-black to-black
        dark:from-black dark:via-red-950/20 dark:to-black
      "
    >
      {/* Overlay para mejorar contraste del fondo */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start w-full">

        {/* ================= ABOUT ================= */}
        <div id="about" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center md:justify-start mb-8">
              <div className="w-64 h-80 overflow-hidden rounded-2xl border-4 border-emerald-500 dark:border-red-500 hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] dark:hover:shadow-[0_0_35px_rgba(239,68,68,0.5)] transition-all duration-300">
                <img src={profileImg} alt="Ricardo Krotter" className="w-full h-full object-cover" />
              </div>
            </div>

            <p className="uppercase tracking-widest text-sm text-emerald-400 dark:text-red-400 mb-2 font-bold">
              Perfil profesional
            </p>

            <h2 className="text-4xl font-extrabold mb-4 text-white">
              Sobre mí
            </h2>

            <div className="space-y-6 text-gray-200 leading-relaxed text-lg">
              <p>
                Vengo de un entorno de <strong className="text-white font-bold">alta exigencia laboral</strong>. Durante mas de <strong className="text-white font-bold">10 años</strong> desarrollé la capacidad de gestionar <strong className="text-white font-bold">procesos criticos</strong> bajo presión con absoluta precisión.
              </p>
              <p>
                En paralelo, realicé mi transición al mundo IT mediante formación intensiva (<strong className="text-white font-bold">(2023-2025)</strong>). Hoy domino un stack moderno enfocado en crear <strong className="text-white font-bold">soluciones escalables</strong>.
              </p>
              <p>
                Como <strong className="text-white font-bold">baterista sesionista</strong> hace 18 años, entiendo que la excelencia requiere <strong className="text-white font-bold">practica diaria y trabajo en equipo</strong>. Esos mismos valores los aplico a cada línea de código que escribo.
              </p>

              <div className="bg-emerald-500/10 dark:bg-red-500/10 p-5 rounded-xl border-l-4 border-emerald-500 dark:border-red-500">
                <h3 className="font-bold mb-2 text-white italic">¿Por qué mi perfil es distinto?</h3>
                <p className="space-y-6 text-gray-200 leading-relaxed text-lg">
                  
                   Vengo de un entorno donde el error no es una opción.
                    En el Poder Judicial aprendí que la precisión y la metodología lo son todo.
                     Como músico, sé lo que es la disciplina diaria para que algo suene bien.
                      Esa misma rigurosidad es la que aplico a mi código: limpio, escalable y entregado a tiempo
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/Ricardo_Krotter_CV.pdf" target="_blank" className="px-6 py-3 rounded-md border border-emerald-500 text-emerald-400 font-semibold hover:bg-emerald-500 hover:text-black dark:border-red-500 dark:text-red-400 dark:hover:bg-red-500 dark:hover:text-black transition-all">
                📄 Ver CV (PDF)
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* ================= PROJECTS ================= */}
        <section id="projects" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-emerald-400 dark:text-red-500 text-center md:text-left">
              Proyectos Destacados
            </h2>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <div className="relative rounded-xl mb-6 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={project.image}
                    src={project.image}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-64 object-cover"
                  />
                </AnimatePresence>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              
              <div className="mb-4">
                <p className="text-emerald-400 dark:text-red-400 text-xs font-bold uppercase mb-1">El Problema:</p>
                <p className="text-gray-300 text-sm italic">"{project.problem}"</p>
              </div>

              <p className="text-gray-200 text-base mb-6">{project.description}</p>

              {/* Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.stack.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a href={project.repo} target="_blank" className="flex-1 text-center py-3 rounded-lg bg-emerald-500 dark:bg-red-500 text-black font-bold hover:opacity-90 transition">
                  GitHub Repo
                </a>
                <a href={project.demo} target="_blank" className="flex-1 text-center py-3 rounded-lg border border-emerald-500 dark:border-red-500 text-white hover:bg-white/10 transition">
                  Live Demo
                </a>
              </div>

              <div className="flex justify-between mt-6">
                <button onClick={prev} className="p-2 text-emerald-400 dark:text-red-400 hover:scale-125 transition">← Anterior</button>
                <button onClick={next} className="p-2 text-emerald-400 dark:text-red-400 hover:scale-125 transition">Siguiente →</button>
              </div>
            </div>
          </motion.div>
        </section>

      </div>
    </section>
  );
}