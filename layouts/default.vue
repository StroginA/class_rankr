<template>
  <div class="app">
      <div class="app__container">
      <header>
        <Navbar />
      </header>
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Navbar from '~/components/Navbar.vue';
  
  export default Vue.extend({
      name: "default",
      components: {Navbar}
  })
</script>

<style lang="scss" scoped>
.app {
  background-color: $grey-1;
  height: 100vh;
  &__container {
    background-color: $white-1;
    margin: 0 auto;
    max-width: 42rem;
    height: 100%;
  }
}
</style>