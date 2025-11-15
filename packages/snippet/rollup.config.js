import eslint from '@rollup/plugin-eslint';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';


export default [
  {
    input: 'src/index.js',

    external: [
      'core-js/modules/es.regexp.exec.js',
      'core-js/modules/es.string.replace.js',
      'core-js/modules/es.string.trim.js',
    ],

    plugins: [
      eslint(),

      json(),

      commonjs({
        sourceMap: false,
      }),

      resolve({
        browser: true,
      }),

      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
      }),
    ],

    output: [
      { file: 'dist/index.cjs', format: 'cjs', exports: 'named' },
    ],
  },
];
