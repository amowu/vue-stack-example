<style lang="less">
  /* Global */
  & { @import "~semantic-ui-less/definitions/globals/reset"; }
  & { @import "~semantic-ui-less/definitions/globals/site"; }
  /* Views */
  & { @import "~semantic-ui-less/definitions/views/card"; }
</style>

<script>
  import Hello from './components/Hello'
  import store from './vuex/store'

  export default {
    components: {
      Hello
    },
    store
  }
</script>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
