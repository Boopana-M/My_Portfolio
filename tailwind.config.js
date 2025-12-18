/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', '"DM Sans"', 'system-ui', 'sans-serif'],
        body: ['"Manrope"', 'system-ui', 'sans-serif'],
      },
      colors: {
        night: '#0b1021',
        card: '#0f172a',
        accent: '#f97316',
        muted: '#9ca3af',
      },
      boxShadow: {
        glow: '0 20px 70px rgba(249, 115, 22, 0.12)',
      },
    },
  },
  plugins: [],
}

