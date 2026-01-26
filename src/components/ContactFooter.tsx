import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"; // instale lucide react para usar los iconos

export default function ContactFooter() {
  return (
    <footer
      id="contact"
      className="
        relative
        py-24 px-6
        bg-gradient-to-br from-black via-slate-900 to-black
        text-gray-300
        overflow-hidden
      "
    >
      {/* Decoración sutil de fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 dark:via-red-500/50 to-transparent" />

      <div className="max-w-4xl mx-auto text-center space-y-12">

        {/* Título con más impacto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            ¿Tenés un proyecto en <span className="text-emerald-400 dark:text-red-500">mente?</span>
          </h2>
          <p className="max-w-xl mx-auto text-gray-400 text-lg">
            Estoy buscando mi primera oportunidad en IT. Si buscás a alguien con **disciplina, resiliencia y compromiso técnico**, ¡hablemos!
          </p>
        </motion.div>

        {/* Botón de Acción Principal (CTA) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center"
        >
          <a
            href="mailto:krotter.dev@gmail.com"
            className="
              group relative inline-flex items-center gap-3
              px-8 py-4 bg-emerald-500 dark:bg-red-500
              text-black font-bold text-xl rounded-full
              hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]
              dark:hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]
              transition-all duration-300
            "
          >
            <Mail className="w-6 h-6" />
            Enviar Mensaje
            <ExternalLink className="w-4 h-4 opacity-50 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Redes Sociales con Iconos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="space-y-6"
        >
          <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold">
            O conectemos por redes
          </p>
          <div className="flex justify-center gap-8">
            <a
              href="https://github.com/Riky48"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-2 group"
            >
              <div className="p-4 rounded-full bg-white/5 group-hover:bg-white/10 group-hover:text-emerald-400 dark:group-hover:text-red-400 transition-all border border-white/10">
                <Github className="w-7 h-7" />
              </div>
              <span className="text-xs font-medium">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/ricardokrotterd/"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-2 group"
            >
              <div className="p-4 rounded-full bg-white/5 group-huge:bg-white/10 group-hover:text-emerald-400 dark:group-hover:text-red-400 transition-all border border-white/10">
                <Linkedin className="w-7 h-7" />
              </div>
              <span className="text-xs font-medium">LinkedIn</span>
            </a>
          </div>
        </motion.div>

        {/* Línea final y Copyright */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Ricardo Krotter · Hecho con React & Tailwind</p>
          <div className="flex gap-4">
            <span className="text-emerald-500/50">#Olavarría</span>
            <span className="text-red-500/50">#Metal</span>
            <span className="text-blue-500/50">#FullStack</span>
          </div>
        </div>
      </div>
    </footer>
  );
}