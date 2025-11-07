import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tropi: {
          sea:  "#0081A7",
          deep: "#006D77",
          sun:  "#FFB703",
          coral:"#FF5A5F",
          sand: "#F1E9D2",
          foam: "#E6F4F1",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
    },
  },
  plugins: [],
};
export default config;