import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import riffandrateImg from "../assets/riffandrate.png";
import portfolioImg from "../assets/portfolio.png";
import exterminioImg from "../assets/exterminio.png";

type Project = {
  title: string;
  category: string;
  description: string;
  stack: string[];
  repo: string;
  demo: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Riff & Rate",
    category: "Plataforma Web para Músicos",
    description:
      "Aplicación web comunitaria que integra perfiles interactivos, catálogo de instrumentos y marketplace. Desarrollada con arquitectura modular, consumo de API REST y persistencia en base de datos relacional.",
    stack: ["React", "TypeScript", "NestJS", "MySQL", "Tailwind CSS"],
    repo: "https://github.com/Riky48/TPFINALFIP-riff.and.rate",
    demo: "https://riffandrate.vercel.app",
    image: riffandrateImg,
  },
  {
    title: "Web Oficial - Exterminio",
    category: "Landing Page Institucional",
    description:
      "Sitio oficial de alto impacto visual con enfoque mobile-first. Optimización de recursos multimedia para velocidad de carga, componentes interactivos y diseño adaptativo.",
    stack: ["React", "Vite", "Tailwind CSS", "Responsive Web"],
    repo: "https://github.com/Riky48/Exterminio.git",
    demo: "https://www.exterminio.com.ar",
    image: exterminioImg,
  },
  {
    title: "Portfolio Personal",
    category: "Aplicación Web Interactiva",
    description:
      "Plataforma personal orientada a la presentación de proyectos. Incluye transiciones fluidas con Framer Motion, soporte para temas dinámicos y arquitectura de componentes reutilizables.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    repo: "https://github.com/Riky48/mi-portfolio",
    demo: "https://ricardokrotter.vercel.app",
    image: portfolioImg,
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

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
      id="projects"
      className="
        min-h-screen py-24 px-6
        bg-gradient-to-br from-emerald-950/30 via-black to-black
        dark:from-red-950/20 dark:via-black dark:to-black
        transition-colors duration-300 flex items-center
      "
    >
      <div className="max-w-4xl mx-auto w-full text-center">
        <p className="uppercase tracking-widest text-xs font-bold text-emerald-400 dark:text-red-400 mb-2 font-mono">
          Trabajos recientes
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
          Proyectos Destacados
        </h2>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ x: direction > 0 ? 80 : -80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -80 : 80, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="
                bg-white/5 border border-emerald-500/30 dark:border-red-500/30
                rounded-2xl shadow-xl backdrop-blur-sm p-6 md:p-8
                hover:border-emerald-500/60 dark:hover:border-red-500/60
                transition-all duration-300
              "
            >
              <div className="relative h-60 md:h-72 w-full overflow-hidden rounded-xl mb-6 bg-black/60">
                <img
                  loading="lazy"
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>

              <span className="text-xs uppercase tracking-wider text-emerald-400 dark:text-red-400 font-mono font-semibold">
                {project.category}
              </span>

              <h3 className="text-2xl md:text-3xl font-bold mt-1 mb-4 text-white">
                {project.title}
              </h3>

              <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Stack Badges */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/10 text-white text-xs rounded-full border border-white/10 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center gap-4 max-w-md mx-auto">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex-1 py-3 px-4 rounded-lg font-semibold text-sm
                    bg-emerald-500 text-black hover:bg-emerald-400
                    dark:bg-red-600 dark:text-white dark:hover:bg-red-500
                    transition-all duration-200 shadow-md
                  "
                >
                  Repositorio
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex-1 py-3 px-4 rounded-lg font-semibold text-sm
                    border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10
                    dark:border-red-500/50 dark:text-red-400 dark:hover:bg-red-500/10
                    transition-all duration-200
                  "
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controles y Paginador */}
        <div className="flex items-center justify-between max-w-xs mx-auto mt-8">
          <button
            onClick={prev}
            className="
              px-4 py-2 text-sm rounded-lg border border-white/10
              text-gray-300 hover:text-white hover:bg-white/10
              transition-all
            "
          >
            ← Anterior
          </button>

          <div className="flex gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-6 bg-emerald-400 dark:bg-red-500"
                    : "bg-gray-600 hover:bg-gray-400"
                }`}
                aria-label={`Ir al proyecto ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="
              px-4 py-2 text-sm rounded-lg border border-white/10
              text-gray-300 hover:text-white hover:bg-white/10
              transition-all
            "
          >
            Siguiente →
          </button>
        </div>
      </div>
    </section>
  );
}