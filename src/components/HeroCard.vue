<script>
  export default {
    props: {
      image: String,
      name: String,
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
