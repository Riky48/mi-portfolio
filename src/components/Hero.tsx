import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative min-h-screen pt-20
        flex items-center justify-center
        overflow-hidden bg-black
      "
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('/hero-drums.jpg')",
        }}
      />

      {/* Gradientes y overlay de contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black pointer-events-none" />
      <div className="absolute inset-0 bg-radial from-emerald-950/20 dark:from-red-950/20 via-transparent to-transparent pointer-events-none" />

      {/* Contenido */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-3xl w-full text-center px-6"
      >
        {/* Badge superior */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-emerald-500/10 dark:bg-red-500/10 border border-emerald-500/30 dark:border-red-500/30 text-emerald-400 dark:text-red-400 text-xs font-mono font-semibold"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 dark:bg-red-500 animate-pulse" />
          Disponible para proyectos y nuevos desafíos
        </motion.div>

        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-white tracking-tight"
        >
          Hola, soy{" "}
          <span className="text-emerald-400 dark:text-red-500 transition-colors duration-300">
            Ricardo Krotter
          </span>
        </motion.h1>

        {/* Subtítulo enfocado en stack */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-200 mb-6"
        >
          Desarrollo Web Frontend · <span className="text-emerald-400 dark:text-red-400 font-mono">React & TypeScript</span>
        </motion.h2>

        {/* Propuesta de valor */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Construyo interfaces web interactivas, modulares y de alto rendimiento, combinando metodologías de trabajo rigurosas con pasión por el detalle.
        </motion.p>

        {/* Botones de acción */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto"
        >
          <a
            href="#projects"
            className="
              px-6 py-3.5 rounded-lg font-semibold text-sm
              bg-emerald-500 text-black hover:bg-emerald-400
              dark:bg-red-600 dark:text-white dark:hover:bg-red-500
              shadow-[0_0_20px_rgba(16,185,129,0.3)] dark:shadow-[0_0_20px_rgba(239,68,68,0.3)]
              hover:-translate-y-0.5 transition-all duration-200
            "
          >
            Ver Proyectos
          </a>

          <a
            href="#contact"
            className="
              px-6 py-3.5 rounded-lg font-semibold text-sm
              border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10
              dark:border-red-500/50 dark:text-red-400 dark:hover:bg-red-500/10
              hover:-translate-y-0.5 transition-all duration-200
            "
          >
            Contactar
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}