/** @type {import('tailwindcss').Config} */
const { nextui, colors } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        abu: "#e2dfda",
        abugelap: "#5f5f5f",
        birutext: "#5d6a7a",
        abuterang: "#ebe8e4",
        birubg: "#697481",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1140px", // Sesuaikan dengan lebar yang diinginkan
          xl: "1140px",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
