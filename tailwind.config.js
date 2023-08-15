/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      outfit: "'Outfit', sans-serif;",
    },
    colors: {
      white: "white",
      black: "black",
      transparent: "transparent",
      primary: "#0C356A",
      darkGray: "#1C1C1C",
      gray: "#646464",
      gray2: "#151515",
      darkBlue: "#060910",
      green: "#24FF00",
      red: "#ff0000",
      grey: {
        1: "#101011",
        2: "#505050",
        3: "#1A1A1A",
      },
      blue: {
        1: "#11151F",
        2: "#09090A",
        3: "#121215",
        4: "#5F6978",
        link: "#3C58EE",
      },
      shade: {
        "dark-blue": "#10131A",
        "dark-blue-2": "#15171C",
        "darkest-blue": "#0B0B0D",
        grayis: "#161616",
      },
    },
  },
  plugins: [],
};
