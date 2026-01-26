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
      {/* OVERLAY - Un poco más oscuro para que el texto resalte más */}
      <div className="absolute inset-0 bg-black/85" />

      {/* CONTENIDO */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-emerald-400 dark:text-red-500">
          Habilidades Técnicas
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Especializado en el ecosistema de JavaScript, con enfoque en arquitecturas escalables y tipado fuerte.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* FRONTEND */}
          <div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl
            border border-emerald-500/20 dark:border-red-500/20
            hover:border-emerald-400/50 dark:hover:border-red-400/50
            hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]
            dark:hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]
            transition-all duration-500 group">
            
            <div className="flex items-center mb-6">
              <div className="p-3 bg-emerald-500/10 dark:bg-red-500/10 rounded-lg mr-4">
                <span className="text-2xl text-emerald-400 dark:text-red-500 font-bold">01</span>
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 dark:group-hover:text-red-400 transition-colors">Frontend</h3>
            </div>

            <ul className="space-y-4">
              <li className="flex flex-col">
                <span className="text-white font-semibold">React & TypeScript</span>
                <span className="text-sm text-gray-400">Interfaces dinámicas con tipado estático seguro.</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white font-semibold">Tailwind CSS</span>
                <span className="text-sm text-gray-400">Diseño responsivo y estilizado moderno (Mobile First).</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white font-semibold">JavaScript (ES6+)</span>
                <span className="text-sm text-gray-400">Lógica compleja y manipulación eficiente del DOM.</span>
              </li>
            </ul>
          </div>

          {/* BACKEND */}
          <div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl
            border border-emerald-500/20 dark:border-red-500/20
            hover:border-emerald-400/50 dark:hover:border-red-400/50
            hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]
            dark:hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]
            transition-all duration-500 group">
            
            <div className="flex items-center mb-6">
              <div className="p-3 bg-emerald-500/10 dark:bg-red-500/10 rounded-lg mr-4">
                <span className="text-2xl text-emerald-400 dark:text-red-500 font-bold">02</span>
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 dark:group-hover:text-red-400 transition-colors">Backend</h3>
            </div>

            <ul className="space-y-4">
              <li className="flex flex-col">
                <span className="text-white font-semibold">NestJS & Node.js</span>
                <span className="text-sm text-gray-400">Arquitecturas modulares y APIs REST robustas.</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white font-semibold">MySQL</span>
                <span className="text-sm text-gray-400">Modelado de bases de datos relacionales y consultas.</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white font-semibold">Auth (JWT / OAuth)</span>
                <span className="text-sm text-gray-400">Implementación de sistemas de seguridad y sesiones.</span>
              </li>
            </ul>
          </div>

          {/* TOOLS & SOFT SKILLS */}
          <div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl
            border border-emerald-500/20 dark:border-red-500/20
            hover:border-emerald-400/50 dark:hover:border-red-400/50
            hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]
            dark:hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]
            transition-all duration-500 group">
            
            <div className="flex items-center mb-6">
              <div className="p-3 bg-emerald-500/10 dark:bg-red-500/10 rounded-lg mr-4">
                <span className="text-2xl text-emerald-400 dark:text-red-500 font-bold">03</span>
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 dark:group-hover:text-red-400 transition-colors">Herramientas</h3>
            </div>

            <ul className="space-y-4">
              <li className="flex flex-col">
                <span className="text-white font-semibold">Git & GitHub</span>
                <span className="text-sm text-gray-400">Control de versiones y trabajo colaborativo.</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white font-semibold">Postman & Vite</span>
                <span className="text-sm text-gray-400">Pruebas de APIs y entornos de desarrollo rápidos.</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white font-semibold">Gestión Crítica</span>
                <span className="text-sm text-gray-400">Resolución de problemas bajo presión y disciplina.</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}