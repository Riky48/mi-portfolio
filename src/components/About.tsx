import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";



export default function About() {
  return (
    <section id="about" className="h-screen flex items-center px-6  bg-gradient-to-br from-green-900 via-black-800 to-slate-900
    dark:from-dark-bg dark:via-black/5 dark:to-black
    transition-colors ">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="w-64 h-90 md:w-72 md:h-116 overflow-hidden rounded-2xl border-emerald-600 border-4 dark:border-red-600 border-4">
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
          <h2 className="text-3xl font-bold mb-6 text-green-600 dark:text-red-600">
            Sobre mí
          </h2>

          <div className="space-y-5 text-black-600 dark:text-gray-300 leading-relaxed">
            <p>
              Vengo de un entorno laboral exigente, donde aprendí a trabajar con
              responsabilidad, organización y bajo presión.
            </p>

            <p>
              En los últimos años decidí dar un giro profesional y formarme como
              desarrollador web, enfocado en crear aplicaciones claras,
              funcionales y bien estructuradas.
            </p>

            <p>
              Además, soy músico y profesor de batería, experiencia que me
              enseñó constancia, práctica diaria y trabajo en equipo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
