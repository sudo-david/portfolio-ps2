import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ps2: {
          deep: "#00040c",
          mid: "#001d3d",
          glow: "#003d82",
          panel: "rgba(0, 25, 51, 0.6)",
          panelBorder: "rgba(90, 200, 250, 0.25)",
          chrome: "#eaf6ff",
          cyan: "#5ac8fa",
          cyanDim: "#2f7ba8",
          text: "#d7ecff",
          muted: "#7fa8c9",
        },
      },
      fontFamily: {
        orbitron: ["'Orbitron'", "sans-serif"],
        rajdhani: ["'Rajdhani'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
