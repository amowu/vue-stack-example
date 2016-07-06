<script>
  export default {
    props: {
      /** 圖片 URL */
      image: String,
      /** 卡片文字 */
      name: String,
      /** 如果為 true，卡片底下會顯示紅色框 */
      selected: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<template>
  <a class="ui card" :class="{ 'red': selected }">
    <div class="image">
      <img :src="image">
    </div>
    <div class="content">
      <div class="header">{{ name }}</div>
    </div>
  </a>
</template>
