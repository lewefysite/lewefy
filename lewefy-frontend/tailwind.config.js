/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandprimary: 'var(--brandprimary)',
        brandinfo: 'var(--brandinfo)',
        neutralwhite: 'var(--neutralwhite)',
        neutralblack: 'var(--neutralblack)',
        neutralgrey: 'var(--neutralgrey)',
        neutralsilver: 'var(--neutralsilver)',
        'default-white': 'var(--default-white)',
      },
      fontFamily: {
        'heading-headline-1': 'var(--heading-headline-1-font-family)',
        'heading-headline-2': 'var(--heading-headline-2-font-family)',
        'heading-headline-3': 'var(--heading-headline-3-font-family)',
        'heading-headline-4': 'var(--heading-headline-4-font-family)',
        'body-regular-body-2': 'var(--body-regular-body-2-font-family)',
        'body-regular-body-3': 'var(--body-regular-body-3-font-family)',
        'body-medium-body-2': 'var(--body-medium-body-2-font-family)',
        'button-link-medium': 'var(--button-link-medium-font-family)',
        'label-medium-label': 'var(--label-medium-label-font-family)',
        'm3-body-large': 'var(--m3-body-large-font-family)',
        'body-link': 'var(--body-link-font-family)',
      },
    },
  },
  plugins: [],
}
