/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [" ./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
    theme: {
      extend: {},
    },
    plugins: [],
    mode: "jit",
  
    purge: [
      './*.html',
      './*.{js,jsx,ts,tsx,vue}'
    ]
  };
  