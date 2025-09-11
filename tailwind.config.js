/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'spin-reverse-slow': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        marquee: 'marquee 5s linear infinite', // ปรับเวลาเป็น 15s ให้เร็วขึ้น
        'spin-reverse-slow': 'spin-reverse-slow 2s linear infinite',
      },
    },
  },
  plugins: [],
}