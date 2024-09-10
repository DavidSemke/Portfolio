/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {},
    extend: {
      keyframes: {
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        blinkCaret: {
          "0%, 100%": { ['border-color']: "transparent" },
          "50%": { ['border-color']: "accent" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        typing: "typing 3.5s steps(40, end)",
        blinkCaret: "blinkCaret 0.75s step-end infinite",
        fadeIn: "fadeIn 0.5s forwards"
      },
    },
  },
  plugins: [require("daisyui")],
}
