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
        gradientColorStops: {
          'to-primary': '#b91202',
          'from-primary/0': 'rgb(185 2 2 / 0)'
        },
        red: {
          600: '#dc2626',
        },
        'primary-light': '#df2a19',
      },
      fontSize: {
        lg: '1.5rem',
        md: '1.125rem',
        h3: '1.5rem'
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
      },
      transitionProperty: {
        'all-ease': 'all 0.7s ease',
      },
      borderRadius: {
        '5': '.3125rem'
      },
      transform: {
        '3d': 'perspective(400px) rotateX(0deg) scaleY(1.0)', // Optional shorthand if reused
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(180deg, var(--tw-gradient-stops))'
      },
      animation: {
        'float-bob-x': 'float-bob-x 2s linear infinite', // Define the custom animation
      },
      keyframes: {
        'float-bob-x': {
          '0%, 100%': { transform: 'translateX(0)' }, // Start and end states
          '50%': { transform: 'translateX(10px)' },   // Midpoint state
        },
      },
    },
  },
  variants: {
    extend: {
      transitionProperty: ['group-hover'],
      transform: ['group-hover'], 
    },
  },
  plugins: [],
} satisfies Config;
