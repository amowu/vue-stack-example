<style scoped>
  .ui.basic.segment {
    min-height: 338.156px;
  }
  .ui.cards {
    justify-content: center;
  }
</style>

<script>
  import { fetchHeroes } from '../vuex/actions/heroes'
  import HeroCard from './HeroCard'

  export default {
    ready () {
      this.fetchHeroes()
    },
    components: {
      HeroCard
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
    <div class="ui basic segment" :class="{ 'loading': heroes.isHeroListPageLoading }">
      <div class="ui cards">
        <hero-card v-for="hero in heroes.entities"
          :image="hero.image"
          :name="hero.name"
          :selected="hero.id == heroes.current.heroId"
          @click="$router.go({ name: 'hero', params: { heroId: hero.id }})">
        </hero-card>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
