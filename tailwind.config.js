module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    fontFamily: {
      primary: 'Montserrat',
      secondary: 'sans-serif',
     
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#00c9db',
        accent: '#00c9db',
      },
      backgroundImage: {
        site: "url('./assets/images/bg.png')",
      },
    },
  },
  plugins: [],
};
