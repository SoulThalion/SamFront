/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {},
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
      '8': '8px',
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}


