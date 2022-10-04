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
  import Navbar from '~/components/common/Navbar.vue';
  
  export default Vue.extend({
      name: "default",
      components: {Navbar}
  })
</script>

<style lang="scss" scoped>
.app {
  background-color: $grey-1;
  font-family: 'IT Encore Sans';
  height: 100vh;
  padding: 1rem 0;
  &__container {
    background-color: $white-1;
    margin: 0 auto;
    max-width: $tablet-min;
    height: 100%;
    border-radius: 1rem;
    box-shadow: 1rem 1rem 0.5rem;
    overflow: hidden;
  }
}

@media only screen and (max-width: $tablet-min) {
  .app {
    padding: 0;
    &__container {
      margin: 0;
      border-radius: 0;
    }
  }
}
</style>