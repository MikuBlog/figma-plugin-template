<!--
 * @Author: 旋仔 zixuan.wen@shopcider.com
 * @Date: 2024-05-11 18:08:49
 * @LastEditors: 旋仔 zixuan.wen@shopcider.com
 * @LastEditTime: 2024-05-13 18:57:05
 * @FilePath: /figma-plugin-vue3-template/src/components/HelloWorld.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="color-red fw-bold">
    Hello World!
    <button @click="() => store.decrease()">
      count: {{ store.count }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@/store'

export default defineComponent({
  setup (props, context) {
    const store = useStore()
    return {
      store,
    }
  },
})
</script>

<style scoped>

</style>
