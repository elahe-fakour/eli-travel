/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textGray: "#71767b",
        textGrayLight: "#e7e9ea",
        borderGray: "#2f3336",
        inputGray: "#202327",
        iconBlue: "#1d9bf0",
        iconGreen: "#00ba7c",
        iconPink: "#f91880",
      },
      screens: {
        xsm: "518px",
        sm:"636px",
        md:"725px",
        lg:"1025px",
        xl:"1115px",
        xxl:"1302px",
      }
    },
  },
  plugins: [],
}