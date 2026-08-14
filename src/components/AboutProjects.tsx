import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profileImg from "../assets/profile.jpg";
import riffandrateImg from "../assets/riffandrate.png";
import portfolioImg from "../assets/portfolio.png";
import exterminioImg from "../assets/exterminio.png";

type Project = {
  title: string;
  problem: string;
  description: string;
  stack: string[];
  repo: string;
  demo: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Riff & Rate - Plataforma para Músicos",
    problem: "Falta de plataformas centralizadas para conectar músicos, gestionar perfiles y comerciar equipamiento de forma segura.",
    description: "Red social interactiva con autenticación, catálogo dinámico, feed de publicaciones y persistencia en base de datos relacional.",
    stack: ["React", "TypeScript", "NestJS", "MySQL", "Tailwind CSS"],
    repo: "https://github.com/Riky48/TPFINALFIP-riff.and.rate",
    demo: "https://riffandrate.vercel.app",
    image: riffandrateImg,
  },
  {
    title: "Web Oficial - Exterminio",
    problem: "Necesidad de presencia digital oficial y canalización de material discográfico para una banda de metal.",
    description: "Landing page institucional desarrollada con enfoque mobile-first, optimización de assets multimedia y carga ultra rápida.",
    stack: ["React", "Vite", "Tailwind CSS", "Responsive Design"],
    repo: "https://github.com/Riky48/Exterminio.git",
    demo: "https://exterminio.vercel.app",
    image: exterminioImg,
  },
  {
    title: "Portfolio Personal Interactivo",
    problem: "Necesidad de exponer proyectos y habilidades técnicas mediante una interfaz moderna y responsiva.",
    description: "Sitio web modular con soporte para temas dinámicos (Dark/Light) y transiciones fluidas de estado.",
    stack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    repo: "https://github.com/Riky48/mi-portfolio",
    demo: "https://ricardokrotter.vercel.app",
    image: portfolioImg,
  },
];

export default function AboutProjects() {
  const [index, setIndex] = useState(0);
  const project = projects[index];

  const prev = () => {
    setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const next = () => {
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

            <div className="space-y-5 text-gray-300 leading-relaxed text-base">
              <p>
                Cuento con más de <strong className="text-white font-semibold">10 años de experiencia en gestión operativa y administración de procesos</strong>, un entorno donde la precisión, el manejo responsable de datos y el cumplimiento de normativas rigurosas son fundamentales.
              </p>
              <p>
                Actualmente enfocado en el desarrollo web mediante <strong className="text-white font-semibold">formación técnica formal</strong>, diseño interfaces modernas y aplicaciones funcionales utilizando <strong className="text-white font-semibold">React, TypeScript y Tailwind CSS</strong>, con bases sólidas en backend y bases de datos relacionales.
              </p>
              <p>
                Mi trayectoria de 18 años como <strong className="text-white font-semibold">músico sesionista</strong> me formó en la disciplina de la práctica continua, la atención al detalle y la sincronización en <strong className="text-white font-semibold">equipos multidisciplinarios</strong>; valores que aplico a cada línea de código y entrega técnica.
              </p>

              <div className="bg-emerald-500/10 dark:bg-red-500/10 p-5 rounded-xl border-l-4 border-emerald-500 dark:border-red-500 mt-4">
                <h3 className="font-bold mb-2 text-white text-base">Valor diferencial</h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  Metodología, templanza y criterio técnico. Aporto madurez profesional para resolver problemas bajo plazos estrictos, priorizando siempre la calidad, la legibilidad y la escalabilidad del software.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a 
                href="/Ricardo_Krotter_CV.pdf" 
                target="_blank" 
                rel="noreferrer"
                className="px-6 py-3 rounded-md border border-emerald-500 text-emerald-400 font-semibold hover:bg-emerald-500 hover:text-black dark:border-red-500 dark:text-red-400 dark:hover:bg-red-500 dark:hover:text-black transition-all"
              >
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
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-emerald-400 dark:text-red-500">
                Proyectos Destacados
              </h2>
              <span className="text-xs text-gray-400">
                {index + 1} de {projects.length}
              </span>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm shadow-xl">
              <div className="relative rounded-xl mb-6 overflow-hidden bg-black/50">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={project.image}
                    src={project.image}
                    alt={project.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-64 object-cover object-top"
                  />
                </AnimatePresence>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              
              <div className="mb-4">
                <p className="text-emerald-400 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-1">El Desafío / Problema:</p>
                <p className="text-gray-300 text-sm italic">"{project.problem}"</p>
              </div>

              <p className="text-gray-200 text-sm mb-6 leading-relaxed">{project.description}</p>

              {/* Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.stack.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20 font-mono">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a 
                  href={project.repo} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 text-center py-3 rounded-lg bg-emerald-500 dark:bg-red-500 text-black font-bold hover:opacity-90 transition"
                >
                  GitHub Repo
                </a>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 text-center py-3 rounded-lg border border-emerald-500 dark:border-red-500 text-white hover:bg-white/10 transition"
                >
                  Live Demo
                </a>
              </div>

              <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/10">
                <button 
                  onClick={prev} 
                  className="px-4 py-2 text-sm rounded border border-emerald-500/40 dark:border-red-500/40 text-emerald-400 dark:text-red-400 hover:bg-white/5 transition"
                >
                  ← Anterior
                </button>
                <button 
                  onClick={next} 
                  className="px-4 py-2 text-sm rounded border border-emerald-500/40 dark:border-red-500/40 text-emerald-400 dark:text-red-400 hover:bg-white/5 transition"
                >
                  Siguiente →
                </button>
              </div>
            </div>
          </motion.div>
        </section>

      </div>
    </section>
  );
}