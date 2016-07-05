<style scoped>
  div:first-child {
    display: flex;
    flex-direction: column;
  }
</style>

<script>
  const ON_OK_BUTTON_CLICK_EVEN_NAME = 'ok'

  export default {
    props: {
      hazard: {
        type: Boolean,
        default: false
      },
      label: {
        type: String
      },
      value: {
        type: Number,
        default: 0
      },
      okButtonDisabled: {
        type: Boolean,
        default: false
      },
      okButtonText: {
        type: String,
        default: 'ok'
      }
    },
    methods: {
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
