/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Biro Script Plus Bold US": ["Biro Script Plus Bold US", "cursive"],
        "biro-script-plus": ["Biro Script Plus", "cursive"],
        "biro-script-plus-sloppy": ["Biro Script Plus Sloppy", "cursive"],
        "biro-script-plus-sloppy-us": ["Biro Script Plus Sloppy US", "cursive"],
        "biro-script-plus-us": ["Biro Script Plus US", "cursive"],
        "messina-sans-mono": ["Messina Sans Mono", "monospace"],
        "messina-sans-mono-book": ["Messina Sans Mono Book", "monospace"],
        "right-grotesk": ["Right Grotesk", "sans-serif"],
      },
      screens: {
        mobile: "360px",
        tablet: "768px",
        laptop: "1408px",
      },
    },
  },
  plugins: [],
};
