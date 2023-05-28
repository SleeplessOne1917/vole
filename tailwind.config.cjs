/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateAreas: {
        headbar: [". title title title actions"],
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
