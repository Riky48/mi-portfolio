import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  title: string;
  description: string;
  stack: string;
  repo: string;
  demo: string;
};

const projects: Project[] = [
  {
    title: "Plataforma Web para Músicos",
    description:
      "Red social Full Stack para músicos con perfiles profesionales, feed social y marketplace de instrumentos.",
    stack: "React · TypeScript · NestJS · MySQL",
    repo: "https://github.com/Riky48/TPFINALFIP-riff.and.rate",
    demo: "https://riffandrate.vercel.app",
  },
  {
    title: "Portfolio Personal",
    description:
      "Portfolio profesional desarrollado con React, Vite y Tailwind CSS.",
    stack: "React · Vite · Tailwind",
    repo: "https://github.com/Riky48/mi-portfolio",
    demo: "https://ricardokrotter.vercel.app",
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
    <section id="projects" className="py-24 px-6 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-slate-900 dark:text-slate-100">
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
              className=" bg-white dark:bg-slate-800 rounded-xl p-8 shadow-md 
              transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
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
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Repositorio
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 dark:hover:bg-gray-700"
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
            className="px-4 py-2 border rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            ← Anterior
          </button>

          <button
            onClick={next}
            className="px-4 py-2 border rounded hover:bg-gray-200 dark:hover:bg-gray-700"
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
            ? "bg-blue-600"
            : "bg-gray-300 dark:bg-gray-600 hover:bg-blue-400"
        }`}
          />
        ))}
      </div>
    </section>
  );
}
