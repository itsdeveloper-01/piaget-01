/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: { colors: { brand: {600:"#1868db",700:"#1352ad"} } } },
  plugins: [],
};
