import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
      "./src/app/**/*.{js,ts,jsx,tsx,css}",
      "./src/components/**/*.{js,ts,jsx,tsx,css}",
      "./src/style/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--color-background) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        danger: "rgb(var(--color-danger) / <alpha-value>)",
        foreground: "rgb(var(--color-foreground) / <alpha-value>)",
      },
      borderRadius: {
        base: "var(--radius-base)",
      }
    }
  }
}

export default config