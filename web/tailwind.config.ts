import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de docs/brand.md
        forest: "#14342B", // fundo escuro / base
        leaf: "#3FA34D", // primária (CTA)
        "leaf-dark": "#2F8A3C",
        gold: "#E0A83B", // acento sáttvico
        sand: "#F5F1E8", // neutro claro
        graphite: "#26221C", // texto sobre claro
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
