<template>
    <main class="flex flex-col p-3 items-center">
      <p class="mb-5">
        Welcome to <strong>Class_RankR</strong>! You are not in any groups yet.
      </p>
      <Button @click="toggleNewGroupModal">Create new group</Button>
    </main>
  </template>
  
  <script lang="ts">
  import Vue from 'vue'
  import Button from '~/components/Button.vue';
  
  export default Vue.extend({
      name: "HomeScreen",
      components: { Button },
      data() {
        return {
            newGroupOpen: false
        }
      },
      methods: {
        toggleNewGroupModal() {
          this.newGroupOpen = !this.newGroupOpen;
        }
      }
  })
  </script>