import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profileImg from "../assets/profile.jpg";
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

export default function AboutProjects() {
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
      className="
        min-h-screen flex items-center
        px-6 py-24
        bg-gradient-to-br from-emerald-900 via-black to-black
        dark:from-black dark:to-black
      "
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">

        {/* ================= ABOUT ================= */}
        <section id="about">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-8">
              <div
                className="
                  w-64 h-80 overflow-hidden rounded-2xl
                  border-4 border-emerald-500 dark:border-red-500
                  hover:shadow-[0_0_35px_rgba(16,185,129,0.5)]
                  dark:hover:shadow-[0_0_35px_rgba(239,68,68,0.5)]
                  transition-all duration-300
                "
              >
                <img
                  src={profileImg}
                  alt="Ricardo Krotter"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-emerald-400 dark:text-red-500">
              Sobre mí
            </h2>

            <div className="space-y-5 text-gray-300 leading-relaxed">
              <p>
                Vengo de un entorno laboral exigente, donde desarrollé
                responsabilidad, constancia y capacidad de trabajo bajo presión.
              </p>
              <p>
                Reorienté mi carrera hacia el desarrollo web, creando
                aplicaciones claras, funcionales y bien estructuradas.
              </p>
              <p>
                Soy músico y profesor de batería, experiencia que fortaleció mi
                disciplina, creatividad y trabajo en equipo.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section id="projects" className="text-center scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-emerald-400 dark:text-red-500">
              Proyectos
            </h2>

            <div className="relative rounded-xl mb-4">
              <AnimatePresence mode="wait">
                <motion.img
                  key={project.image}
                  src={project.image}
                  alt={project.title}
                  initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
                  transition={{ duration: 0.4 }}
                  className="
                    w-full h-56 object-cover rounded-xl
                    hover:scale-[1.02]
                    hover:shadow-[0_0_40px_rgba(16,185,129,0.45)]
                    dark:hover:shadow-[0_0_40px_rgba(239,68,68,0.45)]
                    transition-all duration-300
                  "
                />
              </AnimatePresence>
            </div>

            <h3 className="text-xl font-semibold text-white mb-2">
              {project.title}
            </h3>

            <p className="text-gray-300 text-sm mb-4">
              {project.description}
            </p>

            <div className="flex justify-center gap-4 mb-4">
              <a
                href={project.repo}
                target="_blank"
                className="
                  px-4 py-2 rounded-md
                  bg-emerald-500 text-black font-semibold
                  hover:bg-emerald-400
                  dark:bg-red-500 dark:hover:bg-red-400
                  transition
                "
              >
                Repo
              </a>

              <a
                href={project.demo}
                target="_blank"
                className="
                  px-4 py-2 rounded-md
                  border border-emerald-500 text-emerald-400
                  hover:bg-emerald-500 hover:text-black
                  dark:border-red-500 dark:text-red-400
                  dark:hover:bg-red-500 dark:hover:text-black
                  transition
                "
              >
                Demo
              </a>
            </div>

            <div className="flex justify-center gap-6">
              <button onClick={prev} className="text-emerald-400 dark:text-red-400">←</button>
              <button onClick={next} className="text-emerald-400 dark:text-red-400">→</button>
            </div>
          </motion.div>
        </section>

      </div>
    </section>
  );
}
