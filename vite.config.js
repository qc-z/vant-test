import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'

import {
  VantResolver,
} from 'unplugin-vue-components/resolvers'
import styleImport, { VantResolve } from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dirs: ['src/components'],
      resolvers: [
        VantResolver(),
      ],
      extensions: ['vue', 'ts', 'tsx'],
      dts: 'src/components.d.ts'
    }),
    styleImport({
      resolves: [VantResolve()]
    })
  ]
})
