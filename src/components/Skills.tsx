import binaryBg from "../assets/binary-bg.png";

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        relative min-h-screen
        flex items-center
        px-6 py-24
        bg-black
      "
      style={{
        backgroundImage: `url(${binaryBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/80 dark:bg-black/80" />

      {/* CONTENIDO */}
      <div className="relative z-10 w-full">
        <h2
          className="
            text-3xl font-bold text-center mb-16
            text-emerald-400 dark:text-red-500
          "
        >
          Habilidades Técnicas
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* FRONTEND */}
          <div className="bg-black/60 backdrop-blur p-6 rounded-xl
            border border-emerald-500/30 dark:border-red-500/30
            hover:border-emerald-400 dark:hover:border-red-400
            hover:shadow-[0_0_25px_rgba(16,185,129,0.45)]
            dark:hover:shadow-[0_0_25px_rgba(239,68,68,0.45)]
            transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Frontend
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          {/* BACKEND */}
          <div className="bg-black/60 backdrop-blur p-6 rounded-xl
            border border-emerald-500/30 dark:border-red-500/30
            hover:border-emerald-400 dark:hover:border-red-400
            hover:shadow-[0_0_25px_rgba(16,185,129,0.45)]
            dark:hover:shadow-[0_0_25px_rgba(239,68,68,0.45)]
            transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Backend
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>Node.js</li>
              <li>NestJS</li>
              <li>APIs REST</li>
              <li>Auth</li>
            </ul>
          </div>

          {/* TOOLS */}
          <div className="bg-black/60 backdrop-blur p-6 rounded-xl
            border border-emerald-500/30 dark:border-red-500/30
            hover:border-emerald-400 dark:hover:border-red-400
            hover:shadow-[0_0_25px_rgba(16,185,129,0.45)]
            dark:hover:shadow-[0_0_25px_rgba(239,68,68,0.45)]
            transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Herramientas
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>Git & GitHub</li>
              <li>MySQL</li>
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
