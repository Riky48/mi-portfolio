import { motion } from "framer-motion";

export default function ContactFooter() {
  return (
    <footer
      id="contact"
      className="
        relative
        py-24 px-6
        bg-gradient-to-br from-black via-slate-900 to-black
        text-gray-300
      "
    >
      <div className="max-w-4xl mx-auto text-center space-y-10">

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-emerald-400 dark:text-red-500"
        >
          ¿Charlamos?
        </motion.h2>

        {/* Texto */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-xl mx-auto text-gray-400"
        >
          Estoy abierto a oportunidades laborales, proyectos freelance o
          simplemente conectar y compartir ideas.
        </motion.p>

        {/* Contacto */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <p className="text-lg text-white">
            📧 <span className="text-emerald-400 dark:text-red-400">
              krotter.dev@gmail.com
            </span>
          </p>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Riky48"
              target="_blank"
              rel="noreferrer"
              className="
                hover:text-emerald-400 dark:hover:text-red-400
                transition-colors
              "
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="
                hover:text-emerald-400 dark:hover:text-red-400
                transition-colors
              "
            >
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Línea */}
        <div className="h-px w-full bg-white/10 my-10" />

        {/* Footer */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Ricardo Krotter · Desarrollador Web
        </p>
      </div>
    </footer>
  );
}
