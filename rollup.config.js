const { swc } = require('rollup-plugin-swc3')
const { preserveShebangs } = require('rollup-plugin-preserve-shebangs')
const fs = require('fs')

const swcrc = JSON.parse(fs.readFileSync('./.swcrc'))

export default {
  input: './src/index.ts',
  output: {
    file: './bin/index.js',
    format: 'cjs'
  },
  external: ['yargs'],
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
