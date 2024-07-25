import { text } from "stream/consumers";
import type { Config } from "tailwindcss";
import { DEFAULT_CIPHERS } from "tls";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary:{
          DEFAULT: "var(--primary)"
        },
        secondary:{
          DEFAULT: "var(--secondary)"
        },
        background:{
          DEFAULT: "var(--background)",
          secondary: "var(--background-secondary)",
        },
        'foreground':"var(--foreground)",
        'text-primary': "var(--text-primary)",
        'text-secondary': 'var(--text-secondary)',
        'color-border': "var(--color-border)",
        button: {
          DEFAULT:'var(--button)',
          secondary: 'var(--button-secondary)',
          hover:'var(--button-hover)',
          text: 'var(--button-text)',
        },
        accent:{
          DEFAULT: 'var(--accent)'
        },
        selected: 'var(--selected)',
        dropdown:{
         DEFAULT: 'var(--dropdown)',
         hover: 'var(--dropdown-hover)',
        },
        muted:{
          DEFAUT: 'var(--muted)',
          foreground: 'var(--muted-foreground)'
        },
        destructive:{
          DEFAULT: 'var(--destructive)', 
        },
        card:{
          DEFAULT: 'var(--card)', 
        },
        popover:{
          DEFAULT: 'var(--popover)',
        }
      }
    },
  },
  plugins: [],
};
export default config;
