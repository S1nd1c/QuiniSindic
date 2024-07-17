/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'euro': ["UEFA Euro"]
      },
      colors: {
        "euro-blue": "#143CDB",
        "euro-complementary": "#3854c2"
      },
      backgroundImage: {
        'stadium': "url('/src/assets/img/background.png')",
      },
      height: {
        '1/10': "10%",
        '8/10': "80%",
        "9/10": "90%" 
      }
    },
  },
  plugins: [],
}

