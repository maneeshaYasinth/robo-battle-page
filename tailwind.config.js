/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        krona: ["Krona One", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        geliat: ["Geliat Alt Bold", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
        transrobotics: ['SF TransRobotics Condensed', 'sans-serif'],
        bebasneue: ['Bebas Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
