module.exports = {
  content: ["./src/**/*.pug"],
  theme: {
    extend: {
      backgroundColor: {
        'blue': '#004798;',
        'gray': '#EAEBEB;',
      },
    },
    colors: {
      // 'gray-1': '#555',
    },
    screens: {
      sm: '500px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    container: {
      // center: true,
      // padding: '2rem',
    },
    fontFamily: {
      // 'sans': ['Roboto', 'sans-serif']
    },
    fontSize: {
      sm: ['0.875rem'], // 14
      base: ['1rem'],   // 16
      lg: ['1.25rem'],  // 20
      xl: ['1.5rem'],   // 24
      xl44: ['2.75rem'],
    }
  },
  plugins: [],
}
