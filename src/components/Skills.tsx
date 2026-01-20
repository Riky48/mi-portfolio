export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-slate-50 dark:bg-slate-900 transition-colors"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-12 text-center">
          Habilidades Técnicas
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend */}
          <div
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm 
            transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Frontend
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm 
            transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Backend
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>Node.js</li>
              <li>NestJS</li>
              <li>APIs REST</li>
              <li>Autenticación</li>
              <li>Manejo de asincronía</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm 
            transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Herramientas
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>MySQL</li>
              <li>Git & GitHub</li>
              <li>Vite</li>
              <li>Postman</li>
              <li>VS Code</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
