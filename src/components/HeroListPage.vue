<script>
  import HeroCard from './HeroCard'
  export default {
    components: {
      HeroCard
    },
    vuex: {
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
        @click="$router.go({ name: 'hero', params: { heroId: hero.id }})">
      </hero-card>
    </div>
    <router-view></router-view>
  </div>
</template>
