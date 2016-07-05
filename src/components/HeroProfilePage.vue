<script>
  import {
    editCurrHeroAttr,
    fetchCurrHeroProfile,
    patchCurrHeroProfile
  } from '../vuex/actions/heroes'
  import NumericalInput from './NumericalInput'
  import StatisticButton from './StatisticButton'

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
        this.editCurrHeroAttr(heroId, attr, newVal)
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
      NumericalInput,
      StatisticButton
    },
    vuex: {
      getters: {
        heroes: state => state.heroes
      },
      actions: {
        editCurrHeroAttr,
        fetchCurrHeroProfile,
        patchCurrHeroProfile
      }
    }
  }
</script>

<template>
  <div class="ui basic segment"
    :class="{ 'loading': heroes.isHeroProfilePageLoading }"
    v-if="heroes.current.heroId">
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
      </div>
      <div class="column">
        <statistic-button
          label="剩餘點數"
          ok-button-text="儲存"
          :hazard="remainingPoints > 0"
          :ok-button-disabled="remainingPoints > 0"
          :value="remainingPoints"
          @ok="patchCurrHeroProfile(heroes.current.heroId, heroes.current.profile)">
        </statistic-button>
      </div>
    </div>
  </div>
</template>
