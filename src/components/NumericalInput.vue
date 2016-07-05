<script>
  const ON_CHANGE_EVEN_NAME = 'change'

  export default {
    props: {
      max: {
        type: Number,
        default: Number.MAX_SAFE_INTEGER
      },
      min: {
        type: Number,
        default: Number.MIN_SAFE_INTEGER
      },
      step: {
        type: Number,
        default: 1
      },
      value: {
        type: Number,
        default: 0,
        coerce: function (val) {
          return parseInt(val)
        }
      }
    },
    methods: {
      add (step = 1) {
        const { max, min } = this
        const oldVal = this.value
        const result = Math.min(Math.max(oldVal + step, min), max)
        if (result !== oldVal) {
          this.value = result
          this.$emit(ON_CHANGE_EVEN_NAME, result)
        }
      }
    }
  }
</script>

<template>
  <div class="ui action input">
    <input type="text" name="num-input-text" readonly :value='value'>
    <button name="dec-btn" class="ui icon button" @click.prevent="add(-step)">
      <i class="minus icon"></i>
    </button>
    <button name="inc-btn" class="ui icon button" @click.prevent="add(step)">
      <i class="plus icon"></i>
    </button>
  </div>
</template>
