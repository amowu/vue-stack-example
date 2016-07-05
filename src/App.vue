<style lang="less">
  /* Global */
  & { @import "~semantic-ui-less/definitions/globals/reset"; }
  & { @import "~semantic-ui-less/definitions/globals/site"; }
  /* Elements */
  & { @import "~semantic-ui-less/definitions/elements/button"; }
  & { @import "~semantic-ui-less/definitions/elements/icon"; }
  & { @import "~semantic-ui-less/definitions/elements/input"; }
  /* Views */
  & { @import "~semantic-ui-less/definitions/views/card"; }
  & { @import "~semantic-ui-less/definitions/views/statistic"; }
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
