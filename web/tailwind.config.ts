import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "280px",
      sm: "768px",
      md: "1024px",
      lg: "1280px",
      xl: "1920px",
    },
    extend: {
      colors: {
        "grey-1e": "#1E1F22",
        "grey-1f": "#1F1F1F",
        "grey-25": "#252525",
        "grey-313": "#313338",
        "grey-2B": "#2B2B2B",
        "green-main": "#00AE46",
        "red-main": "#FD3A3A",
        "blue-main": "#2674EA",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
