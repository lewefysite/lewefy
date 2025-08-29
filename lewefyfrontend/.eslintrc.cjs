// File: lewefyfrontend/.eslintrc.cjs
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: { jsx: true }
  },
  env: {
    browser: true,
    es2021: true
  },
  plugins: [
    'react',
    'react-hooks'
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    // não exige importar React em cada JSX file
    'react/react-in-jsx-scope': 'off',
    // desliga a checagem de PropTypes
    'react/prop-types': 'off',
    // permite variáveis não usadas em argumentos (prefira prefixar com _ se precisar)
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }]
  }
};
