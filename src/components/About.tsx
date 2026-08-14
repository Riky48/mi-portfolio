import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="
        min-h-screen flex items-center px-6 py-20
        bg-gradient-to-br from-emerald-950/40 via-black to-black
        dark:from-red-950/30 dark:via-black dark:to-black
        transition-colors duration-300
      "
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="
            w-64 h-80 md:w-80 md:h-96
            overflow-hidden rounded-2xl
            border-2 border-emerald-500 dark:border-red-500
            shadow-[0_0_25px_rgba(16,185,129,0.2)] dark:shadow-[0_0_25px_rgba(239,68,68,0.2)]
            transition-all duration-300
          ">
            <img
              src={profileImg}
              alt="Ricardo Krotter"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="uppercase tracking-widest text-xs font-bold text-emerald-400 dark:text-red-400 mb-2 font-mono">
            Trayectoria y Enfoque
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Sobre mí
          </h2>

          <div className="space-y-4 text-gray-300 leading-relaxed text-base">
            <p>
              Cuento con más de una década de experiencia en <strong className="text-white font-semibold">gestión operativa y administración de procesos</strong>, un entorno donde la precisión, el manejo responsable de datos y el cumplimiento normativo son la prioridad.
            </p>

            <p>
              En mi formación en desarrollo web aplico esa misma estructura metódica para construir interfaces interactivas, modulares y accesibles utilizando <strong className="text-white font-semibold">React, TypeScript y Tailwind CSS</strong>, integrando bases sólidas en lógica backend y bases de datos relacionales.
            </p>

            <p>
              Mi recorrido como <strong className="text-white font-semibold">músico sesionista y docente</strong> aporta a mi perfil técnico una rigurosa disciplina de práctica continua, atención meticulosa al detalle y fluidez para colaborar en <strong className="text-white font-semibold">equipos multidisciplinarios</strong>.
            </p>
          </div>

          <div className="mt-8 flex gap-4">
            <a
              href="/Ricardo_Krotter_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="
                px-6 py-3 rounded-lg font-semibold text-sm
                bg-emerald-500 text-black hover:bg-emerald-400
                dark:bg-red-600 dark:text-white dark:hover:bg-red-500
                transition-all duration-200
              "
            >
              Descargar CV (PDF)
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}