import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
    './**/*.{md,html}' // opcional, cobre casos fora de src/public
  ],
  theme: {
    extend: {
      colors: {
        brandprimary: 'rgba(76, 175, 79, 1)',
        brandinfo: 'rgba(33, 148, 243, 1)',
        brandsecondary: 'rgba(38, 50, 56, 1)',
        neutralwhite: 'rgba(255, 255, 255, 1)',
        actionerror: 'rgba(229, 56, 53, 1)',
        actionsuccess: 'rgba(46, 125, 49, 1)',
        actionwarning: 'rgba(251, 192, 45, 1)',
      },
      fontFamily: {
        inter: ['Inter', 'Helvetica', 'sans-serif'],
        roboto: ['Roboto', 'Helvetica', 'sans-serif'],
        arimo: ['Arimo', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
