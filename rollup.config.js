import { swc } from 'rollup-plugin-swc3'
import { preserveShebangs } from 'rollup-plugin-preserve-shebangs'
import fs from 'fs'

const swcrc = JSON.parse(fs.readFileSync('./.swcrc'))

export default {
  input: './src/index.ts',
  output: {
    file: './bin/index.js',
    format: 'cjs'
  },
  external: ['yargs', 'child_process'],
  plugins: [
    preserveShebangs(),
    swc({
      include: /\.[jt]sx?$/, // default
      exclude: /node_modules/, // default
      tsconfig: 'tsconfig.json', // default
      ...swcrc
    })
  ]
}
