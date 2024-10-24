import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          "50": "#fffaec",
          "100": "#fff4d3",
          "200": "#ffe6a5",
          "300": "#ffd26d",
          "400": "#ffb332",
          "500": "#ff9a0a",
          "600": "#ff8200",
          "700": "#cc5f02",
          "800": "#a1490b",
          "900": "#823e0c",
          "950": "#461d04",
        },
      },
    },
  },
  plugins: [],
};
export default config;
