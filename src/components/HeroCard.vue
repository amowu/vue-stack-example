<script>
  export default {
    props: {
      image: String,
      name: String
    }
  }
</script>

<template>
  <a class="ui card">
    <div class="image">
      <img :src="image">
    </div>
    <div class="content">
      <div class="header">{{ name }}</div>
    </div>
  </a>
</template>
