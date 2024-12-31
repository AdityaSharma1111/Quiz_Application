/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/index.html'],
  theme: {
    extend: {
      colors: {
        custBorderG: '#B7E1C1',
        custBgG: '#D4EDDA',
        custTextG: '#155724',
        custBorderR: '#F4BEC3', 
        custBgR: '#F8D7DA',
        custTextR: '#721C24',
      },
      curson: {
        pointer: 'pointer',
      },
    },
  },
  plugins: [],
}

