import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactFooter() {
  return (
    <footer
      id="contact"
      className="
        relative py-24 px-6
        bg-black text-gray-300
        overflow-hidden
      "
    >
      {/* Línea divisoria con gradiente */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 dark:via-red-500/50 to-transparent" />

      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Título de llamada a la acción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="uppercase tracking-widest text-xs font-bold text-emerald-400 dark:text-red-400 mb-2 font-mono">
            Contacto
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            ¿Hablamos de tu próximo{" "}
            <span className="text-emerald-400 dark:text-red-500 transition-colors">
              proyecto?
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-gray-300 text-base md:text-lg leading-relaxed">
            Disponible para integrarme a equipos de desarrollo y colaborar en proyectos con stack moderno. Aporto <strong className="text-white font-semibold">criterio técnico, método de trabajo y compromiso</strong>.
          </p>
        </motion.div>

        {/* Botón principal de Email */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center"
        >
          <a
            href="mailto:krotter.dev@gmail.com"
            className="
              inline-flex items-center gap-3 px-8 py-4
              bg-emerald-500 text-black dark:bg-red-600 dark:text-white
              font-bold text-lg rounded-xl
              hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]
              dark:hover:shadow-[0_0_30px_rgba(239,68,68,0.4)]
              transition-all duration-300
            "
          >
            <Mail className="w-5 h-5" />
            Enviar Mensaje
          </a>
        </motion.div>

        {/* Enlaces Sociales */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <p className="text-xs uppercase tracking-widest text-gray-500 font-mono font-semibold">
            Redes y Perfiles
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Riky48"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-2 group"
            >
              <div className="p-4 rounded-xl bg-white/5 group-hover:bg-white/10 group-hover:text-emerald-400 dark:group-hover:text-red-400 transition-all border border-white/10">
                <Github className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-gray-400 group-hover:text-white transition-colors">
                GitHub
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/ricardokrotterd/"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-2 group"
            >
              <div className="p-4 rounded-xl bg-white/5 group-hover:bg-white/10 group-hover:text-emerald-400 dark:group-hover:text-red-400 transition-all border border-white/10">
                <Linkedin className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-gray-400 group-hover:text-white transition-colors">
                LinkedIn
              </span>
            </a>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-mono">
          <p>© {new Date().getFullYear()} Ricardo Krotter · Construido con React & Tailwind CSS</p>
          <div className="flex gap-4">
            <span className="text-emerald-400/70 dark:text-red-400/70">#Frontend</span>
            <span className="text-emerald-400/70 dark:text-red-400/70">#TypeScript</span>
            <span className="text-emerald-400/70 dark:text-red-400/70">#React</span>
          </div>
        </div>
      </div>
    </footer>
  );
}