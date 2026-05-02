/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EEF8F3',
          100: '#D6EFE2',
          200: '#A7D7C5',
          300: '#7BC4AB',
          400: '#4FA98A',
          500: '#2E8C6F',
          600: '#1F7A63',
          700: '#1A6353',
          800: '#154E42',
          900: '#0F3A31',
        },
        ink: {
          50: '#F9FAFB',
          100: '#F1F2F4',
          200: '#E4E6EA',
          300: '#CBCFD6',
          400: '#9AA1AC',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 8px 30px -10px rgba(31, 122, 99, 0.18)',
        glow: '0 18px 60px -20px rgba(31, 122, 99, 0.45)',
        card: '0 20px 50px -25px rgba(15, 58, 49, 0.25)',
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(80% 60% at 80% 20%, rgba(167, 215, 197, 0.55) 0%, rgba(249, 250, 251, 0) 60%), radial-gradient(60% 50% at 10% 90%, rgba(31, 122, 99, 0.18) 0%, rgba(249, 250, 251, 0) 60%)',
        'mesh':
          'linear-gradient(120deg, #EEF8F3 0%, #F9FAFB 40%, #F4FAF6 100%)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 2.2s linear infinite',
      },
    },
  },
  plugins: [],
};
