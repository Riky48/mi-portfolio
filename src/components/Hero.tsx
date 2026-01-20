import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative <-0 min-h-screen pt-24 
                flex items-center justify-center
                 bg-slate-100 dark:bg-gray-950
                 text-gray-900 dark:text-gray-100 overflow-hidden"
    >
      {/* Fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-drums.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80 dark:bg-black/70" />

      {/* Contenido */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-3xl w-full text-center px-6"
      >
        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Hola, soy{" "}
          <span className="text-blue-600 dark:text-blue-400">
            Ricardo Krotter
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-2xl md:text-3xl font-semibold
                     text-slate-600 dark:text-slate-300 mb-6"
        >
          Desarrollador Web Full Stack & Músico
        </motion.h2>

        {/* Texto */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg text-slate-500 dark:text-slate-400 mb-10"
        >
          Creo aplicaciones web funcionales, claras y con identidad.
        </motion.p>

        {/* Botones */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-6"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-md
                       bg-blue-600 text-white font-semibold
                       hover:bg-blue-700 hover:-translate-y-0.5
                       transition-all"
          >
            Ver proyectos
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-md
                       border border-blue-600
                       text-blue-600 dark:text-blue-400
                       hover:bg-blue-50 dark:hover:bg-gray-700
                       hover:-translate-y-0.5
                       transition-all"
          >
            Contacto
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
