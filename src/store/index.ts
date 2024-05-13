/*
 * @Author: 旋仔 zixuan.wen@shopcider.com
 * @Date: 2024-05-13 18:52:12
 * @LastEditors: 旋仔 zixuan.wen@shopcider.com
 * @LastEditTime: 2024-05-13 18:52:26
 * @FilePath: /figma-plugin-vue3-template/src/store/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    count: 0,
  }),
  actions: {
    decrease () {
      this.count += 1
    },
  },
})
