/*
 * @Author: 旋仔 zixuan.wen@shopcider.com
 * @Date: 2024-05-11 18:08:49
 * @LastEditors: 旋仔 zixuan.wen@shopcider.com
 * @LastEditTime: 2024-05-13 14:11:20
 * @FilePath: /figma-plugin-vue3-template/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteSingleFile } from 'vite-plugin-singlefile'
import UnoCSS from 'unocss/vite'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS(),
    AutoImport({
      imports: [
        // presets
        'vue',
      ],
      dts: './src/auto-imports.d.ts',
    }),
    vue(),
    viteSingleFile(),
  ],
  css: {
    preprocessorOptions: {
      less: {},
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '~': resolve(__dirname, './'),
    },
  },
  build: {
    // https://vitejs.cn/config/#build-csscodesplit
    cssCodeSplit: false,
    // https://vitejs.cn/config/#build-assetsinlinelimit
    assetsInlineLimit: 100000000,
    rollupOptions: {
      input: {
        index: 'index.html',
        code: 'figma/code.ts',
      },
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
})
