<template>
  <main class="home">
    <p class="home__text">
      Welcome to <strong>Class_RankR</strong>! You are not in any groups yet.
    </p>
    <Button @click="toggleNewSessionModal">Create new group</Button>
    <Modal v-show="newSessionOpen" v-on:close-modal="toggleNewSessionModal">
      <NewSessionForm />
    </Modal>
  </main>
</template>
  
<script lang="ts">
import Vue from 'vue'
import Button from '~/components/common/Button.vue';
import Modal from '~/components/common/Modal.vue';
import NewSessionForm from './NewSessionForm.vue';

export default Vue.extend({
  name: "HomeScreen",
  components: { Button, Modal, NewSessionForm },
  data() {
    return {
      newSessionOpen: false
    }
  },
  methods: {
    toggleNewSessionModal() {
      this.newSessionOpen = !this.newSessionOpen;
    }
  }
})
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.75rem;
  &__text {
    margin-bottom: 1.25rem;
  }
}
</style>