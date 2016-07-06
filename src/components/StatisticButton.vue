<style scoped>
  /** 縱向排列元件 */
  div:first-child {
    display: flex;
    flex-direction: column;
  }
</style>

<script>
  const ON_OK_BUTTON_CLICK_EVEN_NAME = 'ok'

  export default {
    props: {
      /** 如果為 true，數值會以紅色顯示 */
      hazard: {
        type: Boolean,
        default: false
      },
      /** 顯示的文字 */
      label: {
        type: String
      },
      /** 顯示的數字 */
      value: {
        type: Number,
        default: 0
      },
      /** 如果為 true，按鈕無法使用 */
      okButtonDisabled: {
        type: Boolean,
        default: false
      },
      /** 按鈕的顯示文字 */
      okButtonText: {
        type: String,
        default: 'ok'
      }
    },
    methods: {
      /** 按鈕點擊，觸發 ok 事件 */
      ok () {
        this.$emit(ON_OK_BUTTON_CLICK_EVEN_NAME)
      }
    }
  }
</script>

<template>
  <div>
    <div class="ui statistic" :class="{ 'red': hazard }">
      <div class="value">
        {{ value }}
      </div>
      <div class="label">
        {{ label }}
      </div>
    </div>
    <button
      name="hero-profiles-updated-btn"
      class="ui green massive button"
      :class="{ 'disabled': okButtonDisabled }"
      @click.prevent="ok">
      {{ okButtonText }}
    </button>
  </div>
</template>
