import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      keyframes: {
        underline: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        underline: "underline 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
