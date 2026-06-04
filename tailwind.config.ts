import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#05192F",
          800: "#0B2545",
          700: "#163A63",
          600: "#1E4D7B",
        },
        brand: {
          green: "#669E44",
          "green-dark": "#5E9A35",
          lime: "#8EC74A",
          blue: "#4E94CE",
        },
        ink: "#0B2545",
        mist: "#F5F7FA",
      },
      fontFamily: {
        display: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
        btn: "10px",
      },
      maxWidth: {
        content: "1140px",
      },
      backgroundImage: {
        "green-gradient": "linear-gradient(135deg, #8EC74A 0%, #5E9A35 100%)",
        "heading-gradient": "linear-gradient(90deg, #8EC74A 0%, #669E44 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
