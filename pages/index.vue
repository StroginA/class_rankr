<template>
  <HomeScreen />
</template>

<script lang="ts">
import Vue from 'vue'
import HomeScreen from '../components/HomeScreen.vue';

export default Vue.extend({
    name: "IndexPage",
    components: { HomeScreen }
})
</script>
