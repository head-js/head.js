import eslint from '@rollup/plugin-eslint';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
// import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import pkg from './package.json' with { type: 'json' };


const banner = `/* ${pkg.name} ${pkg.version} */`;


export default [
  {
    input: 'src/ua-parser-js/index.ts',

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

      replace({
        preventAssignment: true,
        values: {
          'process.env.NODE_ENV': JSON.stringify('production'),
        },
      }),

      // babel({
      //   exclude: 'node_modules/**',
      //   babelHelpers: 'bundled',
      // }),

      typescript(),

      // terser({
      //   format: {
      //     max_line_len: 120,
      //     preamble: banner,
      //   },
      // }),
    ],

    output: { dir: '.dist', entryFileNames: 'agent-[hash:6].js', format: 'iife', strict: false, name: 'head.agent', exports: 'default', banner },
  },
  // {
  //   input: 'src/index.js',

  //   external: [
  //   ],

  //   plugins: [
  //     eslint(),

  //     commonjs({
  //       sourceMap: false,
  //     }),

  //     resolve({
  //       browser: true,
  //     }),

  //     replace({
  //       preventAssignment: true,
  //       values: {
  //         'process.env.NODE_ENV': JSON.stringify('production'),
  //       },
  //     }),

  //     // babel({
  //     //   exclude: 'node_modules/**',
  //     //   babelHelpers: 'bundled',
  //     // }),

  //     typescript(),

  //     // terser({
  //     //   format: {
  //     //     max_line_len: 120,
  //     //     preamble: banner,
  //     //   },
  //     // }),
  //   ],

  //   output: { dir: '.dist', entryFileNames: 'agent-[hash:6].js', format: 'iife', strict: false, name: 'head.agent', exports: 'default', banner },
  // },
];
