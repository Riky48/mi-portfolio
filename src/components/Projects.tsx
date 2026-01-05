export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gray-50 dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Proyectos
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 space-y-6">

          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Plataforma Web para Músicos
          </h3>

          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Plataforma web Full Stack pensada para músicos, donde pueden crear
            un perfil profesional, compartir contenido y conectarse con otros
            músicos. Además, incluye un marketplace integrado para la compra y
            venta de instrumentos.
          </p>

          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
            <li>Registro y autenticación de usuarios</li>
            <li>Perfil profesional con currículum, fotos y videos</li>
            <li>Feed social para interacción entre músicos</li>
            <li>Marketplace para venta de instrumentos</li>
            <li>API REST y arquitectura cliente–servidor</li>
          </ul>

          <div className="text-gray-700 dark:text-gray-400">
            <span className="font-semibold">Stack:</span>{" "}
            React · TypeScript · NestJS · MySQL
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/Riky48/TPFINALFIP-riff.and.rate"
              target="_blank"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Ver repositorio
            </a>

            <a
              href="#"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg
                         hover:bg-blue-50 dark:hover:bg-gray-700 transition"
            >
              Demo
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
