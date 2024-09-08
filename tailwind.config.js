/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}", // Include all HTML and JS files in the current folder and subfolders
    "!./node_modules", // Exclude the node_modules folder
    "!./**/node_modules", // Exclude any node_modules folder in subdirectories (if applicable)
  ],
  theme: {
    extend: {
      fontFamily: {
        bahnschrift: ["Bahnschrift", "sans-serif"],
      },
      backgroundImage: {
        'hero-pattern': "url('../assets/timer/timer_bg.svg')",
        
      },
    },
  },
  plugins: [],
};
