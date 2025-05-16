import pkg from './package.json' with { type: 'json' }
import typescript from '@rollup/plugin-typescript'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// const pkg = JSON.parse(
//   readFileSync(new URL('./package.json', import.meta.url)).toString(),
// )

export default {
  input: {
    // cli: path.resolve(__dirname, 'src/node/cli.ts'),
    cli: fileURLToPath(new URL('src/node/cli.ts', import.meta.url))
  },
  output: {
    dir: './dist',
    entryFileNames: `node/[name].js`,
    chunkFileNames: 'node/chunks/dep-[hash].js',
    exports: 'named',
    format: 'esm',
    externalLiveBindings: false,
    freeze: false,
  },
  external: [
    '@danielhaim/titlecaser/dist/titlecaser.module.js',
    ...Object.keys(pkg.dependencies)
  ],
  plugins: [typescript()]
}
