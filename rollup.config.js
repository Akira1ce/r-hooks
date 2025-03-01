import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/hooks/index.ts',
  output: [
    {
      dir: 'dist/lib',
      format: 'cjs',
    },
    {
      dir: 'dist/es',
      format: 'esm',
    },
  ],
  plugins: [resolve(), commonjs(), typescript()],
  external: ['react', 'react-dom'],
};
