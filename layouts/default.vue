<template>
  <div class="bg-gray-500 h-screen">
      <div class="md: container max-w-2xl md:mx-auto bg-gray-50 h-screen">
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
      name: "RankrLayout",
      components: {Navbar}
  })
</script>
  