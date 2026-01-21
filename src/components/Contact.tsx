export default function Contact() {
  return (
    <section
      id="contact"
      className="h-screen flex items-center px-6 bg-gradient-to-br from-green-900 via-black-800 to-slate-900
    dark:from-dark-bg dark:via-black/5 dark:to-black"
    >
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-6 
        text-green-600 dark:text-red-600">
          Contacto
        </h2>

        <p className="text-white dark:text-white mb-8">
          Si querés contactarme por trabajo, proyectos o colaborar, escribime.
        </p>

        <div className="space-y-4">
          <p className="text-lg text-green-600/70 dark:text-red-600/70 ">
            📧 riki.48@hotmail.com
          </p>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Riky48"
              target="_blank"
              rel="noreferrer"
              className="text-green-600 hover:underline dark:text-red-600"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ricardokrotterd/"
              target="_blank"
              rel="noreferrer"
              className="text-green-600 hover:underline dark:text-red-600"
            >
              LinkedIn
            </a>
          </div>
        </div>

      </div>
      
  

    </section>
  );
}
