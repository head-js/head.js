import eslint from '@rollup/plugin-eslint';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import pkg from './package.json' with { type: 'json' };


const banner = `/* ${pkg.name} ${pkg.version} */`;


export default [
  {
    input: 'src/loadFromCdn.js',

    external: [
      'core-js/modules/es.array.slice.js',
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

    output: { dir: 'dist', entryFileNames: 'guancecom-load-from-cdn-[hash:6].js', format: 'iife', strict: false, globals: { head: 'head' }, exports: 'none', banner },
  },
  {
    input: 'src/init.js',

    external: [
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

    output: { dir: 'dist', entryFileNames: 'guancecom-init-[hash:6].js', format: 'iife', strict: false, globals: { head: 'head' }, exports: 'none', banner },
  },
];
