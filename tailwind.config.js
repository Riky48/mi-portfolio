/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
  colors: {
    light: {
      bg: "#F1F5F9",        // gris azulado muy claro
      surface: "#FFFFFF",  // cards
      text: "#1F2933",     // gris oscuro frío
      muted: "#64748B",    // gris medio
      blue: "#2563EB",     // azul tech
      green: "#10B981",    // verde tecnología
    },
    dark: {
      bg: "#0B0B0D",
      surface: "#111827",
      text: "#E5E7EB",
      muted: "#9CA3AF",
      accent: "#E10600",
    },
  },
}

  },
  plugins: [],
};
