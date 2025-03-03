module.exports = {
  corePlugins: {
    preflight: false, // Disable Tailwind's preflight
  },
  important: '#__next', // Ensure styles don't clash with MUI
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Add the paths to your files where Tailwind is used
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
