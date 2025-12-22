export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-3xl w-full text-center px-4">

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Hola, soy <span className="text-blue-600">Ricardo Krotter</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
          Desarrollador Web Full Stack
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          En formación constante, enfocado en crear aplicaciones web funcionales y claras.
          Busco mi primera oportunidad profesional en el mundo IT.
        </p>

        <p className="text-sm text-gray-500 dark:text-gray-500 mb-10">
          Background en trabajo bajo presión y disciplina profesional
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="#projects"
            className="px-6 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Ver proyectos
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-md border border-blue-600 text-blue-600 font-semibold
                       hover:bg-blue-50 dark:hover:bg-gray-800 transition"
          >
            Contacto
          </a>
        </div>

      </div>
    </section>
  );
}
