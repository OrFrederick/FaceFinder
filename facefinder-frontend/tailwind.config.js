module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            top: '-10px',
          },
          '100%': {
            opacity: '1',
            top: '0',
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-in',
      },
    },
  },
  plugins: [],
  extend: {
    visibility: ['group-hover'],
  },
};
