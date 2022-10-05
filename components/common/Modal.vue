<template>
  <div class="modal" aria-labelledby="modal-title" role="dialog" aria-modal="true"
    @click="$emit('close-modal')">
    <div class="modal__backdrop"></div>
    <div class="modal__body" @click.stop>
      <Button class="modal__close button button_small-icon" @click="$emit('close-modal')">X</Button>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from './Button.vue';

export default Vue.extend({
  name: "Modal",
  components: { Button }
})
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  margin: 5rem auto auto auto;
  &__backdrop {
    overflow: auto;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: $black-1;
    filter: opacity(0.5);
  }
  &__body {
    width: 640px;
    max-width: 90vw;
    background-color: $white-1;
    position: relative;
    overflow: visible;
    border-radius: 0.25rem;
    padding: 1rem;
  }
  &__close {
    position: absolute;
    top: -1rem;
    right: -1rem;
  }
}
</style>