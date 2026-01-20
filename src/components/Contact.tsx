export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-slate-50 dark:bg-slate-900 transition"
    >
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-6 bg-slate-50 dark:bg-slate-900
        text-slate-900 dark:text-slate-100">
          Contacto
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-8">
          Si querés contactarme por trabajo, proyectos o colaborar, escribime.
        </p>

        <div className="space-y-4">
          <p className="text-lg text-slate-600 dark:text-slate-300">
            📧 riki.48@hotmail.com
          </p>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Riky48"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ricardokrotterd/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
