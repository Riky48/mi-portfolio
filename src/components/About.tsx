import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-white dark:bg-gray-900 scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* FOTO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <img
            src={profile}
            alt="Ricardo Krotter"
            className="w-64 h-84 object-cover rounded-2xl
                       shadow-lg
                       border border-gray-200 dark:border-gray-700"
          />
        </motion.div>

        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-6 dark:text-white">
            Sobre mí
          </h2>

          <div className="space-y-5 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              Vengo de un entorno laboral exigente, donde aprendí a trabajar con
              responsabilidad, organización y bajo presión.
            </p>

            <p>
              En los últimos años decidí dar un giro profesional y formarme como
              desarrollador web, enfocándome en crear aplicaciones claras,
              funcionales y bien estructuradas.
            </p>

            <p>
              Actualmente continúo fortaleciendo mis conocimientos técnicos
              mientras construyo proyectos propios con tecnologías modernas.
            </p>

            <p>
              Además, soy músico y profesor de batería, una disciplina que me
              enseñó constancia, práctica diaria y trabajo en equipo.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
