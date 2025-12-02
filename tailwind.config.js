/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandBlue: "#3B2F2F",     // قهوه‌ای تیره (اصلی)
        brandGold: "#FFAD60",     // نارنجی گرم
        brandCream: "#FFF8F0",    // پس‌زمینه ملایم
        brandWhite: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      boxShadow: {
        soft: "0 4px 10px rgba(59, 47, 47, 0.1)",
      },
    },
  },
  plugins: [],
};
