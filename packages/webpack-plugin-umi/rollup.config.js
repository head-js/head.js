import eslint from '@rollup/plugin-eslint';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';


export default [
  {
    input: 'src/html.js',

    external: [
      'core-js/modules/es.array.iterator.js',
      'core-js/modules/es.regexp.exec.js',
      'core-js/modules/es.string.replace.js',
      'core-js/modules/es.string.trim.js',
      'core-js/modules/web.dom-collections.iterator.js',
      'html-webpack-plugin',
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
      { file: 'dist/html.cjs', format: 'cjs', exports: 'default' },
    ],
  },
];
