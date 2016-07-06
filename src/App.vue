<style lang="less">
  /* Semantic UI Global */
  & { @import "~semantic-ui-less/definitions/globals/reset"; }
  & { @import "~semantic-ui-less/definitions/globals/site"; }
  /* Semantic UI Elements */
  & { @import "~semantic-ui-less/definitions/elements/button"; }
  & { @import "~semantic-ui-less/definitions/elements/container"; }
  & { @import "~semantic-ui-less/definitions/elements/icon"; }
  & { @import "~semantic-ui-less/definitions/elements/input"; }
  & { @import "~semantic-ui-less/definitions/elements/label"; }
  & { @import "~semantic-ui-less/definitions/elements/list"; }
  & { @import "~semantic-ui-less/definitions/elements/segment"; }
  /* Semantic UI Collections */
  & { @import "~semantic-ui-less/definitions/collections/grid"; }
  /* Semantic UI Views */
  & { @import "~semantic-ui-less/definitions/views/card"; }
  & { @import "~semantic-ui-less/definitions/views/statistic"; }
</style>

<script>
  import store from './vuex/store'

  export default {
    store
  }
</script>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
