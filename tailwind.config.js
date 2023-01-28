/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        postifytheme: {
          primary: "#f2b229",

          secondary: "#e07f94",

          accent: "#f47a9f",

          neutral: "#372A3C",

          "base-100": "#F7F7F8",

          info: "#3A8ACF",

          success: "#166A63",

          warning: "#B68107",

          error: "#F56B94",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
