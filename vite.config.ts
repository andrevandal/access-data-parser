/// <reference types="vitest" />

// Configure Vitest (https://vitest.dev/config/)

import { defineConfig } from 'vite'
import path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  build: {
    lib: {
      formats: ['es', 'cjs', 'umd', 'iife'],
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'AccessDataParser',
      fileName: (format) => `access-data-parser.${format}.js`
    },
  },
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, './src')
    },
  },
  test: {
    /* for example, use global to avoid globals imports (describe, test, expect): */
    // globals: true,
  },
  plugins:[
    tsconfigPaths
  ]
})
