<template>
  <main class="home">
    <p class="home__text">
      Welcome to <strong>Class_RankR</strong>! You are not in any groups yet.
    </p>
    <Button @click="toggleNewGroupModal">Create new group</Button>
    <Modal v-show="newGroupOpen" v-on:close-modal="toggleNewGroupModal">
      <NewGroupForm />
    </Modal>
  </main>
</template>
  
<script lang="ts">
import Vue from 'vue'
import Button from '~/components/common/Button.vue';
import Modal from '~/components/common/Modal.vue';
import NewGroupForm from './NewGroupForm.vue';

export default Vue.extend({
  name: "HomeScreen",
  components: { Button, Modal, NewGroupForm },
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