import { type Options, defineConfig } from 'tsup'

const commonOptions = {
  splitting: false,
  sourcemap: true,
  format: ['cjs', 'esm'],
  dts: true,
  target: 'esnext',
} satisfies Options

export default defineConfig([
  {
    ...commonOptions,
    clean: true,
    entry: ['src/index.ts'],
  },
])
