import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {},
    extend: {
      keyframes: {
        typingFull: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        typing85: {
          "0%": { width: "0" },
          "100%": { width: "85%" },
        },
        blinkCaret: {
          "50%": { borderColor: "transparent" },
        },
        hideCaretAfter: {
          "100%": { borderColor: "transparent" },
        },
        hideContentBefore: {
          "0%": { borderColor: "transparent", width: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        typingFull:
          "typingFull 3.5s steps(40), blinkCaret 1s step-end infinite, hideCaretAfter 3.5s step-end forwards",
        typing85:
          "typing85 3.5s steps(40) 4s, blinkCaret 1s step-end 4s infinite, hideContentBefore 4s step-end forwards",
        fadeIn: "fadeIn 0.5s forwards",
      },
    },
  },
  plugins: [daisyui],
}
