<template>
  <div>
    <h1>Hero List Page</h1>
    <a v-link="{ name: 'hero', params: { heroId: 1 }}">Daredevil</a>
    <a v-link="{ name: 'hero', params: { heroId: 2 }}">Thor</a>
    <a v-link="{ name: 'hero', params: { heroId: 3 }}">Iron Man</a>
    <a v-link="{ name: 'hero', params: { heroId: 4 }}">Hulk</a>
    <router-view></router-view>
  </div>
</template>
