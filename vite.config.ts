/*
 * @Author: 旋仔 zixuan.wen@shopcider.com
 * @Date: 2024-05-11 18:08:49
 * @LastEditors: 旋仔 zixuan.wen@shopcider.com
 * @LastEditTime: 2024-05-16 11:04:14
 * @FilePath: /figma-plugin-vue3-template/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteSingleFile } from 'vite-plugin-singlefile'
import UnoCSS from 'unocss/vite'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import ElementPlus from 'unplugin-element-plus/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS(),
    Components({
      dirs: [resolve(__dirname, './src/components')],
      extensions: ['vue'],
      deep: true, // 搜索子目录
      dts: './src/components.d.ts',
    }),
    AutoImport({
      imports: [
        // presets
        'vue',
      ],
      dts: './src/auto-imports.d.ts',
    }),
    vue(),
    viteSingleFile(),
    ElementPlus({
      useSource: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {},
      scss: {
        additionalData: '@use "@/styles/element-plus.scss" as *;',
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '~': resolve(__dirname, './'),
    },
  },
  build: {
    cssCodeSplit: false,
    assetsInlineLimit: 1024 * 1024, // 1MB
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
