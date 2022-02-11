import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import {
  VantResolver,
} from 'unplugin-vue-components/resolvers'
import { VantResolve, createStyleImportPlugin } from 'vite-plugin-style-import'
const path = require('path')

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
    createStyleImportPlugin({
      resolves: [VantResolve()]
    }),
    AutoImport({
      // resolvers: [ElementPlusResolver()],
      imports: ['vue'
      ],
      dts: 'src/auto-import.d.ts',
      // resolvers: [CustromResolvers()]
    })

  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  server: {
    port: 5000, // 设置服务启动端口号
    open: true
  }
})
// function CustromResolvers(options = {}) {
//   const packName = ['debounce', 'throttle', 'stringify']
//   return [
//     {
//       type: "utils",
//       resolve: (name) => {
//         if (!packName.includes(name)) return
//         return {
//           path: '@/utils',
//         }
//       }
//     }
//   ]
// }

