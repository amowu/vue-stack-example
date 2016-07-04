<script>
  import {
    setCurr,
    updateAttr
  } from '../vuex/actions/heroes'
  import NumericalInput from './NumericalInput'

  export default {
    computed: {
      usedPoints () {
        const { heroId } = this.heroes.current
        const { attrs } = this.heroes.entities[heroId]
        return Object.keys(attrs)
          .reduce((sum, key) => sum + attrs[key], 0)
      },
      remainingPoints () {
        const {
          usedPoints,
          heroes: {
            current: {
              totalPoints
            }
          }
        } = this
        return totalPoints - usedPoints
      }
    },
    methods: {
      onStatusChange (attr, [newVal]) {
        const { heroId } = this.heroes.current
        this.updateAttr(heroId, attr, newVal)
      }
    },
    watch: {
      '$route.params.heroId' (val, oldVal) {
        if (val !== oldVal) {
          const { attrs } = this.heroes.entities[val]
          this.setCurr(val, attrs)
        }
      }
    },
    ready () {
      const { heroId } = this.$route.params
      const { attrs } = this.heroes.entities[heroId]
      this.setCurr(heroId, attrs)
    },
    components: {
      'numerical-input': NumericalInput
    },
    vuex: {
      getters: {
        heroes: state => state.heroes
      },
      actions: {
        setCurr,
        updateAttr
      }
    }
  }
</script>

<template>
  <div v-if="heroes.current.heroId">
    <ul>
      <li class="hero-attrs"
          v-for="(key, val) in heroes.entities[heroes.current.heroId].attrs">
        {{ key | uppercase }}
        <numerical-input
          :max="val + remainingPoints"
          :min="0"
          :value="val"
          @change="onStatusChange(key, $arguments)">
        </numerical-input>
      </li>
    </ul>
    <div>
      剩餘點數：
      <output name="hero-remaining-points">{{ remainingPoints }}</output>
    </div>
    <button name="hero-attrs-updated-btn">儲存</button>
  </div>
</template>
