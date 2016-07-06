<style scoped>
  /** 這是 card list 的最小高度，避免一開始 loading 效果無法顯示 */
  .ui.basic.segment {
    min-height: 338.156px;
  }
  /** 水平置中 card */
  .ui.cards {
    justify-content: center;
  }
</style>

<script>
  import HeroCard from '../components/HeroCard'
  import { fetchHeroes } from '../vuex/actions/heroes'

  export default {
    computed: {
      /** 根據 heroes 與 profile 請求情況判斷，是否顯示 loading 動畫 */
      isLoading () {
        const { isHeroListPageLoading, isHeroProfilePageLoading } = this.heroes
        return isHeroListPageLoading || isHeroProfilePageLoading
      }
    },
    ready () {
      // HeroListPage 第一次被 render 的時候，像 backend 請求 heroes 資料
      this.fetchHeroes()
    },
    components: {
      HeroCard // <hero-card>
    },
    vuex: {
      actions: {
        fetchHeroes
      },
      getters: {
        heroes: state => state.heroes
      }
    }
  }
</script>

<template>
  <div>
    <div class="ui basic segment" :class="{ 'loading': isLoading }">
      <div class="ui cards">
        <hero-card v-for="hero in heroes.entities"
          :image="hero.image"
          :name="hero.name"
          :selected="hero.id == heroes.current.heroId"
          @click="$router.go({ name: 'hero', params: { heroId: hero.id }})">
          <!-- 當 <hero-card> click 的時候，前往 /hero/:heroId -->
        </hero-card>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
