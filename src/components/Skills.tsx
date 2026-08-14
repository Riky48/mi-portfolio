import binaryBg from "../assets/binary-bg.png";

type SkillItem = {
  name: string;
  detail: string;
};

type SkillCategory = {
  id: string;
  title: string;
  skills: SkillItem[];
};

const skillCategories: SkillCategory[] = [
  {
    id: "01",
    title: "Frontend",
    skills: [
      {
        name: "React & TypeScript",
        detail: "Desarrollo de interfaces interactivas, tipado estático y gestión de estado predecible.",
      },
      {
        name: "Tailwind CSS",
        detail: "Maquetación fluida mobile-first, diseño responsivo y sistemas de diseño consistentes.",
      },
      {
        name: "JavaScript (ES6+)",
        detail: "Manejo sólido de asincronía, manipulación del DOM y consumo eficiente de APIs.",
      },
    ],
  },
  {
    id: "02",
    title: "Backend & Datos",
    skills: [
      {
        name: "NestJS & Node.js",
        detail: "Construcción de APIs RESTful con arquitectura modular, controladores y servicios.",
      },
      {
        name: "MySQL",
        detail: "Diseño y modelado de bases de datos relacionales, consultas estructuradas y persistencia.",
      },
      {
        name: "Autenticación & Seguridad",
        detail: "Protección de rutas, manejo de sesiones y autenticación segura con JWT.",
      },
    ],
  },
  {
    id: "03",
    title: "Entorno & Criterio",
    skills: [
      {
        name: "Git & GitHub",
        detail: "Control de versiones, flujos de ramas (Git Flow) y documentación clara de código.",
      },
      {
        name: "Vite, Postman & Docker",
        detail: "Configuración ágil de entornos de desarrollo, prueba de endpoints y contenedores básicos.",
      },
      {
        name: "Metodología y Resolución",
        detail: "Pensamiento analítico, atención al detalle y enfoque metódico para resolver incidencias.",
      },
    ],
  },
];

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
      {/* Overlay de contraste */}
      <div className="absolute inset-0 bg-black/90 pointer-events-none" />

      {/* Contenedor principal */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <p className="uppercase tracking-widest text-xs font-bold text-center text-emerald-400 dark:text-red-400 mb-2 font-mono">
          Stack & Metodología
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          Habilidades Técnicas
        </h2>

        <p className="text-gray-300 text-center mb-14 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Enfoque en desarrollo frontend con tipado estático, código mantenible y bases sólidas en servicios backend y persistencia relacional.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="
                bg-white/5 backdrop-blur-md p-8 rounded-2xl
                border border-emerald-500/20 dark:border-red-500/20
                hover:border-emerald-400/50 dark:hover:border-red-400/50
                hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]
                dark:hover:shadow-[0_0_25px_rgba(239,68,68,0.15)]
                transition-all duration-300 group
              "
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-emerald-500/10 dark:bg-red-500/10 rounded-lg mr-4 border border-emerald-500/20 dark:border-red-500/20">
                  <span className="text-xl text-emerald-400 dark:text-red-400 font-bold font-mono">
                    {category.id}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 dark:group-hover:text-red-400 transition-colors">
                  {category.title}
                </h3>
              </div>

              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="flex flex-col">
                    <span className="text-white font-medium text-sm md:text-base">
                      {skill.name}
                    </span>
                    <span className="text-xs md:text-sm text-gray-400 mt-0.5 leading-relaxed">
                      {skill.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}