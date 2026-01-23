import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
      relative
  min-h-[100svh] pt-24 
  flex items-center justify-center
  overflow-hidden
  bg-green/50 dark:bg-dark-bg
"

    >
      {/* Fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-green"
        style={{
          backgroundImage: "url('/hero-drums.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 dark:bg-black/70" />

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
          className="text-4xl md:text-5xl font-bold mb-4 text-white dark:text-white"
        >
          Hola, soy{" "}
          <span className="text-green-600 border--b border-black dark:text-dark-accent">
            Ricardo Krotter
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-2xl md:text-3xl font-semibold
                     text-white dark:text-dark-muted mb-6"
        >
          Desarrollador Web Full Stack & Músico
        </motion.h2>

        {/* Texto */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg text-white dark:text-dark-muted mb-10"
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
                       bg-green-600 text-black font-semibold dark:bg-dark-accent dark:text-black
                       hover:bg-green-500 hover:-translate-y-0.5 dark:hover:bg-dark-accent/50
                       transition-all"
          >
            Ver proyectos
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-md
                       border border-green-600 dark:border-dark-accent
                       text-green-600 dark:text-red-400
                       hover:bg-gray-800 dark:hover:bg-gray-800
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
