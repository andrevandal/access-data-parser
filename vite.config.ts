/// <reference types="vitest" />

// Configure Vitest (https://vitest.dev/config/)

import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'AccessDataParser',
      fileName: (format) => `access-data-parser.${format}.ts`
    },
    // rollupOptions: {
    //   // make sure to externalize deps that shouldn't be bundled
    //   // into your library
    //   external: ['vue'],
    //   output: {
    //     // Provide global variables to use in the UMD build
    //     // for externalized deps
    //     globals: {
    //       vue: 'Vue'
    //     }
    //   }
    // }
  },
  test: {
    /* for example, use global to avoid globals imports (describe, test, expect): */
    // globals: true,
  },
})
