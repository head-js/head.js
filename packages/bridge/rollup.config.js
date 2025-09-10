import eslint from '@rollup/plugin-eslint';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import pkg from './package.json' with { type: 'json' };


const banner = `/* ${pkg.name} ${pkg.version} */`;


export default [
  {
    input: 'src/index.js',

    external: [
      'core-js/modules/es.array.iterator.js',
      'core-js/modules/es.promise.js',
      'core-js/modules/web.dom-collections.iterator.js',
    ],

    plugins: [
      eslint(),

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

      terser({
        format: {
          max_line_len: 120,
          preamble: banner,
        },
      }),
    ],

    output: { dir: '../snippet', entryFileNames: 'bridge-[hash:6].js', format: 'iife', strict: false, name: 'head.bridge', exports: 'default', banner },
  },
];
