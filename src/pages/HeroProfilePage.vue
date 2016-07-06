<script>
  import NumericalInput from '../components/NumericalInput'
  import StatisticButton from '../components/StatisticButton'
  import {
    editCurrHeroAttr,
    fetchCurrHeroProfile,
    patchCurrHeroProfile
  } from '../vuex/actions/heroes'

  export default {
    computed: {
      /** 當前 hero 已經使用在數值上的點數總和 */
      usedPoints () {
        const { profile } = this.heroes.current
        return Object.keys(profile)
          .reduce((sum, key) => sum + profile[key], 0)
      },
      /** 當前 hero 目前剩下的點數 */
      remainingPoints () {
        const {
          usedPoints,
          heroes: {
            current: {
              totalPoints
            }
          }
        } = this
        // 剩餘點數 = 總點數 - 目前使用總點數
        return totalPoints - usedPoints
      }
    },
    methods: {
      /**
       * 當 <numerical-input> 增減按鈕點擊，change 事件被觸發的時候，
       * 執行 editCurrHeroAttr action
       * @param {string} attr - 要更新的數值 key，例如：str
       * @param {Array} [newVal] - 要更新的數值 value
       */
      onAttrChange (attr, [newVal]) {
        const { heroId } = this.heroes.current
        this.editCurrHeroAttr(heroId, attr, newVal)
      }
    },
    watch: {
      '$route.params.heroId' (heroId, prevHeroId) {
        // 監聽路由 /heroes/:heroId 的 :heroId，有變更的話就重新請求 hero profile
        if (heroId !== prevHeroId) {
          this.fetchCurrHeroProfile(heroId)
        }
      }
    },
    ready () {
      const { heroId } = this.$route.params
      // HeroProfilePage 第一次被 render 的時候，像 backend 請求 hero profile 資料
      this.fetchCurrHeroProfile(heroId)
    },
    components: {
      NumericalInput, // <numerical-input>
      StatisticButton // <statistic-button>
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
    <div class="ui stackable two column grid container">
      <div class="column">
        <div class="ui list">
          <div class="item"
              v-for="(key, val) in heroes.current.profile">
            <numerical-input
              fluid
              :label="key | uppercase"
              :max="val + remainingPoints"
              :min="0"
              :value="val"
              @change="onAttrChange(key, $arguments)">
            </numerical-input>
          </div>
        </div>
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
