<template>
<div class="relative mx-auto" 
aria-labelledby="modal-title" role="dialog" aria-modal="true" 
@click="$emit('close-modal')">
  <div class="overflow-auto scrolling-touch inset-0 w-full h-full fixed
  bg-gray-900 opacity-50"></div>
  <div class="bg-gray-50 rounded overflow-visible relative
  p-4"
  @click.stop>
    <ButtonIcon class="absolute -top-4 -right-4" @click="$emit('close-modal')">X</ButtonIcon>
    <slot></slot>
  </div>
</div>
</template>

<script lang="ts">
    import Vue from 'vue'
import ButtonIcon from './ButtonIcon.vue';
    
    export default Vue.extend({
    name: "Modal",
    components: { ButtonIcon }
})
</script>