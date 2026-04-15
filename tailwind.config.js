/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f172a', // Navy
          light: '#1e293b',
          dark: '#020617',
        },
        ice: {
          light: '#f0f9ff',
          DEFAULT: '#e0f2fe',
          dark: '#bae6fd',
        },
        accent: {
          DEFAULT: '#2563eb', // Action Blue
          hover: '#1d4ed8',
        },
        emergency: '#ef4444', // Warning Red
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
