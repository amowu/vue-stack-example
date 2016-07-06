<script>
  const ON_CHANGE_EVEN_NAME = 'change'

  export default {
    props: {
      /** 如果為 treu，元件會 width: 100% */
      fluid: {
        type: Boolean,
        default: false
      },
      /** 如果有給值，元件左邊會出現該文字 */
      label: String,
      /** 元件的 value 最大不能超過這個值 */
      max: {
        type: Number,
        default: Number.MAX_SAFE_INTEGER
      },
      /** 元件的 value 最小不能低於這個值 */
      min: {
        type: Number,
        default: Number.MIN_SAFE_INTEGER
      },
      /** 元件的 value 增減值，預設為 1 */
      step: {
        type: Number,
        default: 1
      },
      /** 元件顯示的數字 */
      value: {
        type: Number,
        default: 0,
        coerce: function (val) {
          // 將所有輸入的字串轉成數字
          return parseInt(val)
        }
      }
    },
    methods: {
      /**
       * value 會被增加指定的數值，並觸發 change 事件
       * @param {Number} step - 元件 value 的增減值，預設為 1
       */
      add (step = 1) {
        const { max, min } = this
        const oldVal = this.value
        // 增減後的值只能落於 min <= value <= max
        const result = Math.min(Math.max(oldVal + step, min), max)
        // 如果值沒變，則不用處理
        if (result !== oldVal) {
          this.value = result
          this.$emit(ON_CHANGE_EVEN_NAME, result)
        }
      }
    }
  }
</script>

<template>
  <div class="ui action input" :class="{ 'fluid': fluid, 'labeled': label }">
    <div class="ui label" v-show="label">{{ label }}</div>
    <input readonly type="text" name="num-input-text" :value='value'>
    <button name="dec-btn" class="ui icon button" @click.prevent="add(-step)">
      <i class="minus icon"></i>
    </button>
    <button name="inc-btn" class="ui icon button" @click.prevent="add(step)">
      <i class="plus icon"></i>
    </button>
  </div>
</template>
