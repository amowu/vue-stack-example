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
      <div class="ui cards">
        <hero-card v-for="hero in heroes.entities"
          :image="hero.image"
          :name="hero.name"
          :selected="hero.id == heroes.current.heroId"
          @click="$router.go({ name: 'hero', params: { heroId: hero.id }})">
        </hero-card>
    </div>
    <router-view></router-view>
  </div>
</template>
