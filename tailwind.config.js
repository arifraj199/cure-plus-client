/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0CB8B6",
          secondary: "#0F9E9D",
          accent: "#001430",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  
  plugins: [require("daisyui")],
}