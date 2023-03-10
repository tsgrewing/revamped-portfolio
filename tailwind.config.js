module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', ],
  safelist: [
      'text-red-200',
      'text-red-300',
      'text-red-400',
      'text-red-500',
      'text-red-600',
      'text-red-700'
    ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}