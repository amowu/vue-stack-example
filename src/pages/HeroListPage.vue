<style scoped>
  /** 這是 card list 的最小高度，避免一開始 loading 效果無法顯示 */
  .ui.basic.segment {
    min-height: 338.156px;
  }
  /** 水平置中 card */
  .ui.cards {
    justify-content: center;
  }
  /** 移除 Semantic UI 本身的 transition，否則 Vue 無法套用自己的 transition */
  .ui.cards > .card, .ui.card {
    transition: none;
  }
  /** 套用自己的 card:hover animation */
  .ui.cards a.card:hover, a.ui.card:hover {
    transform: none;
    animation: pulse 1s infinite;
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
    components: {
      HeroCard // <hero-card>
    },
    route: {
      data (transition) {
        // HeroListPage render 的時候，向 backend 請求 heroes 資料
        this.fetchHeroes()
      }
    },
    transitions: {
      bounce: {
        enterClass: 'bounceInDown',
        leaveClass: 'bounceOutRight'
      }
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
        <hero-card
          v-for="hero in heroes.entities"
          class="animated"
          transition="bounce"
          stagger="100"
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
