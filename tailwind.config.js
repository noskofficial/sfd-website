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
        "hero-pattern": "url('../assets/timer/timer_bg.svg')",
        "project-bg": "url('../assets/projectReg/project_bg.svg')",
        "celeb-banner": "url('../assets/celebrationbg/celeb_banner.svg')",
      },
      padding: {
        "20px": "20px",
      },
      fontSize: {
        big: "64px",
        mid1: "52px",
        sml: "30px",
        big2: "44px",
        mid2: "35px",
        sml2: "25px",
      },
    },
  },
  plugins: [],
};
