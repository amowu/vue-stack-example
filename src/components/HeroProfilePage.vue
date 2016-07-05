<script>
  import {
    setCurr,
    updateAttr
    fetchCurrHeroProfile,
  } from '../vuex/actions/heroes'
  import NumericalInput from './NumericalInput'

  export default {
    computed: {
      usedPoints () {
        const { profile } = this.heroes.current
        return Object.keys(profile)
          .reduce((sum, key) => sum + profile[key], 0)
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
      '$route.params.heroId' (heroId, prevHeroId) {
        if (heroId !== prevHeroId) {
          this.fetchCurrHeroProfile(heroId)
        }
      }
    },
    ready () {
      const { heroId } = this.$route.params
      this.fetchCurrHeroProfile(heroId)
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
        fetchCurrHeroProfile,
      }
    }
  }
</script>

<template>
  <div v-if="heroes.current.heroId">
    <ul>
      <li class="hero-profiles"
          v-for="(key, val) in heroes.current.profile">
        {{ key | uppercase }}
        <numerical-input
          :max="val + remainingPoints"
          :min="0"
          :value="val"
          @change="onStatusChange(key, $arguments)">
        </numerical-input>
      </li>
    </ul>
    <div class="ui statistic">
      <div class="value">
        {{ remainingPoints }}
      </div>
      <div class="label">
        剩餘點數
      </div>
    </div>
    <button name="hero-attrs-updated-btn" class="massive ui button">
      儲存
    </button>
  </div>
</template>
