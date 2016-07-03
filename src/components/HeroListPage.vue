<template>
  <div>
    <ul class="hero-list">
      <li class="hero-card">
        <a v-link="{ name: 'hero', params: { heroId: 1 }}">
          <img src="http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg" alt="Daredevil">
          <span>Daredevil</span>
        </a>
      </li>
      <li class="hero-card">
        <a v-link="{ name: 'hero', params: { heroId: 2 }}">
          <img src="http://x.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg" alt="Thor">
          <span>Thor</span>
        </a>
      </li>
      <li class="hero-card">
        <a v-link="{ name: 'hero', params: { heroId: 3 }}">
          <img src="http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg" alt="Iron Man">
          <span>Iron Man</span>
        </a>
      </li>
      <li class="hero-card">
        <a v-link="{ name: 'hero', params: { heroId: 4 }}">
          <img src="http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg" alt="Hulk">
          <span>Hulk</span>
        </a>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
