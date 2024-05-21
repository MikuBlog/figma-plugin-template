/*
 * @Description:
 * @Author: xuanzai
 * @Date: 2024-04-19 14:08:49
 * @LastEditors: 旋仔 zixuan.wen@shopcider.com
 * @LastEditTime: 2024-05-21 10:56:43
 */
// uno.config.ts
import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'

export default defineConfig({
  presets: [
    presetUno(),
  ],
  shortcuts: [
    { 'absolute-center': 'absolute top-0 right-0 left-0 bottom-0 m-auto' },
  ],
})
