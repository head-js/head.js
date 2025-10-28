import eslint from '@rollup/plugin-eslint';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import pkg from './package.json' with { type: 'json' };


const banner = `/* ${pkg.name} ${pkg.version} */`;


export default [
  {
    input: 'src/agent.ts',

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

      typescript(),

      terser({
        format: {
          max_line_len: 120,
          preamble: banner,
        },
      }),
    ],

    output: { dir: 'dist', entryFileNames: 'agent-[hash:6].js', format: 'iife', strict: false, globals: { head: 'head' }, exports: 'none', banner },
  },
];
