/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': {'max': '768px'}
      },
      //Agregar configuracion de backgrounds 
      backgroundImage: theme => ({
        'banner':"url('../img/bakbaner.png')"
      }),
      backgroundPosition: {
        'banner-position' : "-200px -200px"
      },
      colors: {
        "azul-claro": "#37bcF9",
        "azul-oscuro": "#0370b9"
      },
      animation: {
        'spin-low': 'spin 2s linear infinite', //linear, que se mantenga estable, infinite, que sea interminablemente
        'from-bellow': 'fromBellow 500ms linear', //linear, que se mantenga estable, infinite, que sea interminablemente
        'from-right':'fromRight 300ms linear',
      },
      keyframes: {
        fromBellow:{
          '0%':  {transform: 'translateY(0%)'},
          '50%': {transform: 'translateY(200%)'},
          '100%': {transform: 'translateY(0%)'}
        },
        fromRight: {
          '0%': { transform: 'translateX(200%)'},
          '100%': { transform: 'translateX(0%)'}
        },
      }
    },
    variants: {
      animation: [ 'responsive', 'hover','group-hover'],
      animate: ['responsive', 'hover', 'group-hover'],
  }
  },
  plugins: []
}

