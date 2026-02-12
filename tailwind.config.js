/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPage: "#FAF7F2",
        bgSurface: "#FFFFFF",
        borderSubtle: "#E6E1D9",
        bgTabs: "#F3EFE8",
        tabHover: "#EFE9DF",
        chipBg: "#F1ECE3",
        chipHover: "#E7E0D5",
        chipBorder: "#D8D1C6",
        textMain: "#2B2B2B",
        textBody: "#3F3F3F",
        textMuted: "#7A7A7A",
        btnPrimary: "#3A4F7A",
        btnPrimaryHover: "#2F4063",
      },
    },
  },
  plugins: [],
};