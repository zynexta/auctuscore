/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#03142C',
          900: '#062B60', // Primary Navy Blue
          800: '#0A3B7D',
          700: '#0E4E9E',
          600: '#1464AD', // Corporate Blue
          500: '#227EC9',
          400: '#539FE0',
          300: '#8BC3F4',
          200: '#BFE0FC',
          100: '#DCEEFF', // Light Blue
          50: '#F0F7FF',
        },
        corporate: {
          blue: '#1464AD',
          navy: '#062B60',
          dark: '#17253A', // Dark Text
          offwhite: '#F7FAFD', // Off White
          border: '#E3ECF5',
          muted: '#627389',
          lightBlue: '#DCEEFF',
        }
      },
      fontFamily: {
        sans: ['"DM Sans"', '"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        heading: ['Manrope', '"DM Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        manrope: ['Manrope', 'sans-serif'],
        dmsans: ['"DM Sans"', 'sans-serif'],
      },
      boxShadow: {
        'card-subtle': '0 2px 8px -2px rgba(6, 43, 96, 0.05), 0 10px 24px -4px rgba(6, 43, 96, 0.08)',
        'card-hover': '0 12px 32px -4px rgba(6, 43, 96, 0.14), 0 4px 12px -2px rgba(6, 43, 96, 0.06)',
        'elevated': '0 20px 40px -15px rgba(6, 43, 96, 0.2)',
        'glow': '0 0 25px rgba(20, 100, 173, 0.25)',
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(135deg, #062B60 0%, #031838 100%)',
        'soft-blue-gradient': 'linear-gradient(180deg, #F7FAFD 0%, #FFFFFF 100%)',
      }
    },
  },
  plugins: [],
};

