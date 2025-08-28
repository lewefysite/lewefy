import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/App.jsx',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [
    resolve({
      extensions: ['.mjs', '.js', '.jsx', '.json']
    }),
    /* outros plugins */
  ]
};
