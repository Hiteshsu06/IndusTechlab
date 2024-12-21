import type { Config } from "tailwindcss";

export default {
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
        primary: "#b90202",
        base: "#141416",
        accent: {
          700: '#1a1a1c',
          900: '#141416'
        },
        body: '#bebebe',
        'primary-light': '#df2a19',
      },
      fontSize: {
        lg: '1.5rem'
      },
      fontFamily: {
        secondary: ['"Rajdhani"', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.25em',
      },
      transitionDuration: {
        350: '350ms',
        400: '400ms'
      }
    },
  },
  plugins: [],
} satisfies Config;
