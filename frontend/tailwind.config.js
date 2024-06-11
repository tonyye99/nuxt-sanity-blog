const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  cssPath: ['~/assets/css/tailwind.css'],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
      },
    },
  },
};
