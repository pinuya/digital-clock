import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: "Orbitron",
        montserrat: "Montserrat",
      },
    },
  },
  plugins: [],
} satisfies Config;
