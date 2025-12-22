export default function Footer() {
  return (
    <footer className="py-6 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-5xl mx-auto text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Ricardo Krotter · Desarrollador Web Full Stack
      </div>
    </footer>
  );
}
