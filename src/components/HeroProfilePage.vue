<script>
  import NumericalInput from './NumericalInput'

  export default {
    data () {
      return {
        status: {
          str: 2,
          int: 7,
          agi: 9,
          luk: 7
        },
        total: 25
      }
    },
    computed: {
      sum () {
        return Object.keys(this.status)
                     .reduce((sum, key) => sum + this.status[key], 0)
      },
      remain () {
        let { total, sum } = this
        return total - sum
      }
    },
    components: {
      'numerical-input': NumericalInput
    }
  }
</script>

<template>
  <div>
    <p>heroId: {{ $route.params.heroId }}</p>
    <ul>
      <li class="hero-status">
        STR
        <numerical-input :value="status.str"></numerical-input>
      </li>
      <li class="hero-status">
        INT
        <numerical-input :value="status.int"></numerical-input>
      </li>
      <li class="hero-status">
        AGI
        <numerical-input :value="status.agi"></numerical-input>
      </li>
      <li class="hero-status">
        LUK
        <numerical-input :value="status.luk"></numerical-input>
      </li>
    </ul>
    <div>
      剩餘點數：
      <output name="hero-status-remain">{{ remain }}</output>
    </div>
    <button name="hero-status-updated-btn">儲存</button>
  </div>
</template>
