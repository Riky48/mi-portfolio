import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import riffandrateImg from "../assets/riffandrate.png";
import portfolioImg from "../assets/portfolio.png";

type Project = {
  title: string;
  description: string;
  stack: string;
  repo: string;
  demo: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Plataforma Web para Músicos",
    description:
      "Red social Full Stack para músicos con perfiles profesionales, feed social y marketplace de instrumentos.",
    stack: "React · TypeScript · NestJS · MySQL",
    repo: "https://github.com/Riky48/TPFINALFIP-riff.and.rate",
    demo: "https://riffandrate.vercel.app",
    image: riffandrateImg,
  },
  {
    title: "Portfolio Personal",
    description:
      "Portfolio profesional desarrollado con React, Vite y Tailwind CSS.",
    stack: "React · Vite · Tailwind",
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
      className="min-h-screen py-24 px-6  bg-gradient-to-br from-slate-900 via-black800 to-green-900
    dark:from-dark-bg dark:via-black/5 dark:to-black
    transition-colors"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-green-600 dark:text-red-600">
          Proyectos
        </h2>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -100 : 100, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="
  bg-gradient-to-br from-emerald-900 via-green-900 to-dark dark:from-red-700 dark:via-red-900 dark:to-dark
  border border-black border-5 dark:border-white dark:border-5
  rounded-xl
  shadow-sm
  hover:-translate-y-1
  hover:shadow-xl
  transition-all
"
            > 
            <img loading="lazy"
        src={project.image}
        alt={project.title}
        className="w-full h-56 object-cover object-top rounded-lg mb-6 shadow-md
        transition-transform duration-300 group-hover:scale-105"
        />
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>

              <p className="text-white dark:text-white mb-4">
                {project.description}
              </p>

              <p className="text-sm text-gray-500 mb-6">
                <span className="font-semibold">Stack:</span> {project.stack}
              </p>

              <div className="flex justify-center gap-4">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-green-600 text-black font-semibold dark:bg-dark-accent dark:text-black
                       hover:bg-green-500 hover:-translate-y-0.5 dark:hover:bg-dark-accent/50
                       transition-all rounded "
                >
                  Repositorio
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-md
                       border border-green-600 dark:border-dark-accent
                       text-green-600 dark:text-red-400
                       hover:bg-gray-800 dark:hover:bg-gray-800
                       hover:-translate-y-0.5
                       transition-all"
                >
                  Demo
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controles */}
        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={prev}
            className="px-4 py-2 border rounded hover:bg-green-500 dark:hover:bg-red-500"
          >
            ← Anterior
          </button>

          <button
            onClick={next}
            className="px-4 py-2 border rounded hover:bg-green-500 dark:hover:bg-red-500"
          >
            Siguiente →
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-6">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition
        ${
          i === index
            ? "bg-emerald-600 dark:bg-red-600 hover:bg-white-400"
            : "bg-gray-300 dark:bg-white-600 hover:bg-white-400"
        }`}
          />
        ))}
      </div>
    </section>
  );
}
