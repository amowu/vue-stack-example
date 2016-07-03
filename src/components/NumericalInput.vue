<script>
  export default {
    props: {
      max: Number,
      min: Number,
      value: {
        type: Number,
        coerce: function (val) {
          return parseInt(val)
        }
      }
    },
    methods: {
      increase () {
        this.value += 1
      },
      decrease () {
        this.value -= 1
      }
    }
  }
</script>

<template>
  <div>
    <button name="dec-btn" @click='decrease'>decrease</button>
    <input type="text" name="num-input-text" :value='value'>
    <button name="inc-btn" @click='increase'>increase</button>
  </div>
</template>
