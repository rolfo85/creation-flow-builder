/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amber: {
          100: "rgba(255, 244, 230, 1)",
        },
        violet: {
          100: "#F4F1FE",
          500: "#815AF0",
          600: "#6941C6",
          150: "rgba(236, 230, 255, 1)",
        },
        purple: {
          50: "#F9F5FF",
        },
        indigo: {
          950: "#2D2B3F",
        },
        slate: {
          600: "#475467",
        },
        gray: {
          300: "#D0D5DD",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          800: "#1D2939",
        },
        midnight: {
          100: "#F9F8FE",
          200: "#EEEDF6",
          300: "#D7D5E4",
          400: "#B1AFC5",
        },
      },
      spacing: {
        "0.5": "0.125rem",
        "1": "0.25rem",
        "1.5": "0.375rem",
        "2": "0.5rem",
        "2.5": "0.625rem",
        "3": "0.75rem",
        "3.5": "0.875rem",
        "4": "1rem",
        "5": "1.25rem",
        "6": "1.5rem",
        "8": "2rem",
        "10": "2.5rem",
        "12": "3rem",
        "16": "4rem",
        "72": "18rem",
      },
      minHeight: {
        "4": "1rem",
        "5": "1.25rem",
        "10": "2.5rem",
        "12": "3rem",
        "14": "3.5rem",
      },
      minWidth: {
        "60": "15rem",
      },
      maxWidth: {
        "6": "1.5rem",
      },
      borderRadius: {
        md: "0.375rem",
        xl: "0.75rem",
        "100px": "100px",
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      },
      letterSpacing: {
        widest: "0.1em",
      },
    },
  },
  plugins: [],
};