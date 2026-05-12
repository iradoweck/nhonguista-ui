/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
    "../../apps/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nhonguista: {
          orange: "#FF8C00",
          black: "#000000",
          white: "#FFFFFF",
          gray: {
            50: "#F9FAFB",
            100: "#F3F4F6",
            200: "#E5E7EB",
            300: "#D1D5DB",
            400: "#9CA3AF",
            500: "#6B7280",
            600: "#4B5563",
            700: "#374151",
            800: "#1F2937",
            900: "#111827",
          }
        },
        primary: {
          DEFAULT: "#FF8C00",
          foreground: "#FFFFFF",
        }
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
